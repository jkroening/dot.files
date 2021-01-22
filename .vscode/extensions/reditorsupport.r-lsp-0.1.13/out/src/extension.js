"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const os = require("os");
const path = require("path");
const net = require("net");
const url = require("url");
const child_process_1 = require("child_process");
const vscode_languageclient_1 = require("vscode-languageclient");
const vscode_1 = require("vscode");
const util_1 = require("./util");
let clients = new Map();
let initSet = new Set();
function createClient(config, selector, cwd, workspaceFolder, outputChannel) {
    return __awaiter(this, void 0, void 0, function* () {
        let client;
        const debug = config.get("lsp.debug");
        const path = yield util_1.getRPath(config);
        if (debug) {
            console.log(`R binary: ${path}`);
        }
        const use_stdio = config.get("lsp.use_stdio");
        const env = Object.create(process.env);
        const lang = config.get("lsp.lang");
        if (lang !== '') {
            env.LANG = lang;
        }
        else if (env.LANG == undefined) {
            env.LANG = "en_US.UTF-8";
        }
        if (debug) {
            console.log(`LANG: ${env.LANG}`);
        }
        const options = { cwd: cwd, env: env };
        const initArgs = config.get("lsp.args").concat("--quiet", "--slave");
        const tcpServerOptions = () => new Promise((resolve, reject) => {
            // Use a TCP socket because of problems with blocking STDIO
            const server = net.createServer(socket => {
                // 'connection' listener
                console.log('R process connected');
                socket.on('end', () => {
                    console.log('R process disconnected');
                });
                server.close();
                resolve({ reader: socket, writer: socket });
            });
            // Listen on random port
            server.listen(0, '127.0.0.1', () => {
                const port = server.address().port;
                let args;
                // The server is implemented in R
                if (debug) {
                    args = initArgs.concat(["-e", `languageserver::run(port=${port},debug=TRUE)`]);
                }
                else {
                    args = initArgs.concat(["-e", `languageserver::run(port=${port})`]);
                }
                const childProcess = child_process_1.spawn(path, args, options);
                client.outputChannel.appendLine(`R Language Server (${childProcess.pid}) started`);
                childProcess.stderr.on('data', (chunk) => {
                    client.outputChannel.appendLine(chunk.toString());
                });
                childProcess.on('exit', (code, signal) => {
                    client.outputChannel.appendLine(`R Language Server (${childProcess.pid}) exited ` +
                        (signal ? `from signal ${signal}` : `with exit code ${code}`));
                    if (code !== 0) {
                        client.outputChannel.show();
                    }
                    client.stop();
                });
                return childProcess;
            });
        });
        // Options to control the language client
        const clientOptions = {
            // Register the server for selected R documents
            documentSelector: selector,
            uriConverters: {
                // VS Code by default %-encodes even the colon after the drive letter
                // NodeJS handles it much better
                code2Protocol: uri => url.format(url.parse(uri.toString(true))),
                protocol2Code: str => vscode_1.Uri.parse(str)
            },
            workspaceFolder: workspaceFolder,
            outputChannel: outputChannel,
            synchronize: {
                // Synchronize the setting section 'r' to the server
                configurationSection: 'r.lsp',
            },
            revealOutputChannelOn: vscode_languageclient_1.RevealOutputChannelOn.Never,
            errorHandler: {
                error: () => vscode_languageclient_1.ErrorAction.Shutdown,
                closed: () => vscode_languageclient_1.CloseAction.DoNotRestart,
            },
        };
        // Create the language client and start the client.
        if (use_stdio && process.platform != "win32") {
            let args;
            if (debug) {
                args = initArgs.concat(["-e", `languageserver::run(debug=TRUE)`]);
            }
            else {
                args = initArgs.concat(["-e", `languageserver::run()`]);
            }
            client = new vscode_languageclient_1.LanguageClient('r', 'R Language Server', { command: path, args: args, options: options }, clientOptions);
        }
        else {
            client = new vscode_languageclient_1.LanguageClient('r', 'R Language Server', tcpServerOptions, clientOptions);
        }
        return client;
    });
}
function checkClient(name) {
    if (initSet.has(name))
        return true;
    initSet.add(name);
    let client = clients.get(name);
    return client && client.needsStop();
}
function getKey(uri) {
    switch (uri.scheme) {
        case 'untitled':
            return uri.scheme;
        case 'vscode-notebook-cell':
            return `vscode-notebook:${uri.fsPath}`;
        default:
            return uri.toString();
    }
}
function activate(context) {
    const config = vscode_1.workspace.getConfiguration('r');
    const outputChannel = vscode_1.window.createOutputChannel('R Language Server');
    function didOpenTextDocument(document) {
        return __awaiter(this, void 0, void 0, function* () {
            if (document.uri.scheme !== 'file' && document.uri.scheme !== 'untitled' && document.uri.scheme !== 'vscode-notebook-cell') {
                return;
            }
            if (document.languageId !== 'r' && document.languageId !== 'rmd') {
                return;
            }
            const folder = vscode_1.workspace.getWorkspaceFolder(document.uri);
            // Each notebook uses a server started from parent folder
            if (document.uri.scheme === 'vscode-notebook-cell') {
                const key = getKey(document.uri);
                if (!checkClient(key)) {
                    console.log(`Start language server for ${document.uri.toString()}`);
                    const documentSelector = [
                        { scheme: 'vscode-notebook-cell', language: 'r', pattern: `${document.uri.fsPath}` },
                    ];
                    let client = yield createClient(config, documentSelector, path.dirname(document.uri.fsPath), folder, outputChannel);
                    client.start();
                    clients.set(key, client);
                    initSet.delete(key);
                }
                return;
            }
            if (folder) {
                // Each workspace uses a server started from the workspace folder
                const key = getKey(folder.uri);
                if (!checkClient(key)) {
                    console.log(`Start language server for ${document.uri.toString()}`);
                    const pattern = `${folder.uri.fsPath}/**/*`;
                    const documentSelector = [
                        { scheme: 'file', language: 'r', pattern: pattern },
                        { scheme: 'file', language: 'rmd', pattern: pattern },
                    ];
                    let client = yield createClient(config, documentSelector, folder.uri.fsPath, folder, outputChannel);
                    client.start();
                    clients.set(key, client);
                    initSet.delete(key);
                }
            }
            else {
                // All untitled documents share a server started from home folder
                if (document.uri.scheme === 'untitled') {
                    const key = getKey(document.uri);
                    if (!checkClient(key)) {
                        console.log(`Start language server for ${document.uri.toString()}`);
                        const documentSelector = [
                            { scheme: 'untitled', language: 'r' },
                            { scheme: 'untitled', language: 'rmd' },
                        ];
                        let client = yield createClient(config, documentSelector, os.homedir(), undefined, outputChannel);
                        client.start();
                        clients.set(key, client);
                        initSet.delete(key);
                    }
                    return;
                }
                // Each file outside workspace uses a server started from parent folder
                if (document.uri.scheme === 'file') {
                    const key = getKey(document.uri);
                    if (!checkClient(key)) {
                        console.log(`Start language server for ${document.uri.toString()}`);
                        const documentSelector = [
                            { scheme: 'file', pattern: document.uri.fsPath },
                        ];
                        let client = yield createClient(config, documentSelector, path.dirname(document.uri.fsPath), undefined, outputChannel);
                        client.start();
                        clients.set(key, client);
                        initSet.delete(key);
                    }
                    return;
                }
            }
        });
    }
    function didCloseTextDocument(document) {
        return __awaiter(this, void 0, void 0, function* () {
            if (document.uri.scheme === 'untitled') {
                const result = vscode_1.workspace.textDocuments.find((doc) => doc.uri.scheme === 'untitled');
                if (result) {
                    // Stop the language server when all untitled documents are closed.
                    return;
                }
            }
            if (document.uri.scheme === 'vscode-notebook-cell') {
                const result = vscode_1.workspace.textDocuments.find((doc) => doc.uri.scheme === document.uri.scheme && doc.uri.fsPath === document.uri.fsPath);
                if (result) {
                    // Stop the language server when all cell documents are closed (notebook closed).
                    return;
                }
            }
            // Stop the language server when single file outside workspace is closed, or the above cases.
            const key = getKey(document.uri);
            let client = clients.get(key);
            if (client) {
                clients.delete(key);
                initSet.delete(key);
                client.stop();
            }
        });
    }
    vscode_1.workspace.onDidOpenTextDocument(didOpenTextDocument);
    vscode_1.workspace.onDidCloseTextDocument(didCloseTextDocument);
    vscode_1.workspace.textDocuments.forEach(didOpenTextDocument);
    vscode_1.workspace.onDidChangeWorkspaceFolders((event) => {
        for (let folder of event.removed) {
            const key = getKey(folder.uri);
            let client = clients.get(key);
            if (client) {
                clients.delete(key);
                initSet.delete(key);
                client.stop();
            }
        }
    });
}
exports.activate = activate;
function deactivate() {
    let promises = [];
    for (let client of clients.values()) {
        promises.push(client.stop());
    }
    return Promise.all(promises).then(() => undefined);
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map