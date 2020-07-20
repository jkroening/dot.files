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
const vscode = require("vscode");
const vscode_1 = require("vscode");
const Path = require("path");
const OS = require("os");
const rust_1 = require("./rust");
let active = rust_1.None;
var Action;
(function (Action) {
    Action[Action["NewFile"] = 0] = "NewFile";
    Action[Action["NewFolder"] = 1] = "NewFolder";
    Action[Action["OpenFile"] = 2] = "OpenFile";
    Action[Action["OpenFileBeside"] = 3] = "OpenFileBeside";
    Action[Action["RenameFile"] = 4] = "RenameFile";
    Action[Action["DeleteFile"] = 5] = "DeleteFile";
    Action[Action["OpenFolder"] = 6] = "OpenFolder";
})(Action || (Action = {}));
function action(label, action) {
    return {
        label,
        name: "",
        action,
        alwaysShow: true,
    };
}
function setContext(state) {
    vscode.commands.executeCommand("setContext", "inFileBrowser", state);
}
function splitPath(path) {
    return path.split(Path.sep);
}
function joinPath(path) {
    return path.join(Path.sep);
}
function fileRecordCompare(left, right) {
    const [leftName, leftDir] = [
        left[0].toLowerCase(),
        (left[1] & vscode_1.FileType.Directory) === vscode_1.FileType.Directory,
    ];
    const [rightName, rightDir] = [
        right[0].toLowerCase(),
        (right[1] & vscode_1.FileType.Directory) === vscode_1.FileType.Directory,
    ];
    if (leftDir && !rightDir) {
        return -1;
    }
    if (rightDir && !leftDir) {
        return 1;
    }
    return leftName > rightName ? 1 : leftName === rightName ? 0 : -1;
}
class FileItem {
    constructor(record) {
        const [name, fileType] = record;
        this.name = name;
        this.fileType = fileType;
        this.alwaysShow = !name.startsWith(".");
        switch (this.fileType) {
            case vscode_1.FileType.Directory:
                this.label = `$(folder) ${name}`;
                break;
            case vscode_1.FileType.Directory | vscode_1.FileType.SymbolicLink:
                this.label = `$(file-symlink-directory) ${name}`;
                break;
            case vscode_1.FileType.File | vscode_1.FileType.SymbolicLink:
                this.label = `$(file-symlink-file) ${name}`;
            default:
                this.label = `$(file) ${name}`;
                break;
        }
    }
}
class FileBrowser {
    constructor(filePath) {
        this.items = [];
        this.inActions = false;
        this.keepAlive = false;
        this.actionsButton = {
            iconPath: new vscode_1.ThemeIcon("ellipsis"),
            tooltip: "Actions on selected file",
        };
        this.stepOutButton = {
            iconPath: new vscode_1.ThemeIcon("arrow-left"),
            tooltip: "Step out of folder",
        };
        this.stepInButton = {
            iconPath: new vscode_1.ThemeIcon("arrow-right"),
            tooltip: "Step into folder",
        };
        this.path = splitPath(filePath);
        this.file = this.path.pop();
        this.pathHistory = { [joinPath(this.path)]: this.file };
        this.current = vscode.window.createQuickPick();
        this.current.buttons = [this.actionsButton, this.stepOutButton, this.stepInButton];
        this.current.placeholder = "Type a file name here to search or open a new file";
        this.current.onDidHide(() => {
            if (!this.keepAlive) {
                this.dispose();
            }
        });
        this.current.onDidAccept(this.onDidAccept.bind(this));
        this.current.onDidChangeValue(this.onDidChangeValue.bind(this));
        this.current.onDidTriggerButton(this.onDidTriggerButton.bind(this));
        this.update().then(() => this.current.show());
    }
    dispose() {
        setContext(false);
        this.current.dispose();
        active = rust_1.None;
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            this.current.enabled = false;
            this.current.title = joinPath(this.path);
            this.current.value = "";
            const stat = (yield rust_1.Result.try(vscode.workspace.fs.stat(vscode_1.Uri.file(this.current.title)))).unwrap();
            if (stat && this.inActions && (stat.type & vscode_1.FileType.File) === vscode_1.FileType.File) {
                this.items = [
                    action("$(file) Open this file", Action.OpenFile),
                    action("$(split-horizontal) Open this file to the side", Action.OpenFileBeside),
                    action("$(edit) Rename this file", Action.RenameFile),
                    action("$(trash) Delete this file", Action.DeleteFile),
                ];
                this.current.items = this.items;
            }
            else if (stat &&
                this.inActions &&
                (stat.type & vscode_1.FileType.Directory) === vscode_1.FileType.Directory) {
                this.items = [
                    action("$(folder-opened) Open this folder", Action.OpenFolder),
                    action("$(edit) Rename this folder", Action.RenameFile),
                    action("$(trash) Delete this folder", Action.DeleteFile),
                ];
                this.current.items = this.items;
            }
            else if (stat && (stat.type & vscode_1.FileType.Directory) === vscode_1.FileType.Directory) {
                let items;
                const records = yield vscode.workspace.fs.readDirectory(vscode_1.Uri.file(joinPath(this.path)));
                records.sort(fileRecordCompare);
                items = records.map((entry) => new FileItem(entry));
                this.items = items;
                this.current.items = items;
                this.current.activeItems = items.filter((item) => item.name === this.file);
            }
            else {
                this.items = [action("$(new-folder) Create this folder", Action.NewFolder)];
                this.current.items = this.items;
            }
            this.current.enabled = true;
        });
    }
    onDidChangeValue(value, isAutoComplete = false) {
        if (this.inActions) {
            return;
        }
        if (!isAutoComplete) {
            this.autoCompletion = undefined;
        }
        const existingItem = this.items.find((item) => item.name === value);
        if (value === "") {
            this.current.items = this.items;
            this.current.activeItems = [];
        }
        else if (existingItem !== undefined) {
            this.current.items = this.items;
            this.current.activeItems = [existingItem];
        }
        else if (value.endsWith("/")) {
            const path = value.slice(0, -1);
            if (path === "~") {
                this.path = splitPath(OS.homedir());
            }
            else if (path === "..") {
                this.path.pop();
            }
            else if (path.length > 0 && path !== ".") {
                this.path.push(path);
            }
            this.file = undefined;
            this.update();
        }
        else {
            const newItem = {
                label: `$(new-file) ${value}`,
                name: value,
                description: "Open as new file",
                alwaysShow: true,
                action: Action.NewFile,
            };
            this.current.items = [newItem, ...this.items];
            this.current.activeItems = [newItem];
        }
    }
    onDidTriggerButton(button) {
        if (button === this.stepInButton) {
            this.stepIn();
        }
        else if (button === this.stepOutButton) {
            this.stepOut();
        }
        else if (button === this.actionsButton) {
            this.actions();
        }
    }
    activeItem() {
        return new rust_1.Option(this.current.activeItems[0]);
    }
    stepIn() {
        return __awaiter(this, void 0, void 0, function* () {
            this.activeItem().ifSome((item) => __awaiter(this, void 0, void 0, function* () {
                if (item.action !== undefined) {
                    this.runAction(item);
                }
                else if (item.fileType !== undefined) {
                    if ((item.fileType & vscode_1.FileType.Directory) === vscode_1.FileType.Directory) {
                        this.path.push(item.name);
                        this.file = this.pathHistory[joinPath(this.path)];
                        yield this.update();
                    }
                    else if ((item.fileType & vscode_1.FileType.File) === vscode_1.FileType.File) {
                        this.path.push(item.name);
                        this.file = undefined;
                        this.inActions = true;
                        yield this.update();
                    }
                }
            }));
        });
    }
    stepOut() {
        return __awaiter(this, void 0, void 0, function* () {
            this.inActions = false;
            if (this.path.length > 1) {
                this.pathHistory[joinPath(this.path)] = this.activeItem()
                    .map((item) => item.name)
                    .unwrap();
                this.file = this.path.pop();
                yield this.update();
            }
        });
    }
    actions() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.inActions) {
                return;
            }
            yield this.activeItem().match((item) => __awaiter(this, void 0, void 0, function* () {
                this.inActions = true;
                this.path.push(item.name);
                this.file = undefined;
                yield this.update();
            }), () => __awaiter(this, void 0, void 0, function* () {
                this.inActions = true;
                this.file = undefined;
                yield this.update();
            }));
        });
    }
    tabCompletion(tabNext) {
        if (this.inActions) {
            return;
        }
        if (this.autoCompletion) {
            const length = this.autoCompletion.items.length;
            const step = tabNext ? 1 : -1;
            this.autoCompletion.index = (this.autoCompletion.index + length + step) % length;
        }
        else {
            const items = this.items.filter((i) => i.name.toLowerCase().startsWith(this.current.value.toLowerCase()));
            this.autoCompletion = {
                index: tabNext ? 0 : items.length - 1,
                items,
            };
        }
        const newIndex = this.autoCompletion.index;
        const length = this.autoCompletion.items.length;
        if (newIndex < length) {
            // This also checks out when items is empty
            const item = this.autoCompletion.items[newIndex];
            this.current.value = item.name;
            if (length === 1 && item.fileType === vscode_1.FileType.Directory) {
                this.current.value += Path.sep;
            }
            this.onDidChangeValue(this.current.value, true);
        }
    }
    onDidAccept() {
        this.autoCompletion = undefined;
        this.activeItem().ifSome((item) => {
            if (item.action !== undefined) {
                this.runAction(item);
            }
            else if (item.fileType !== undefined &&
                (item.fileType & vscode_1.FileType.Directory) === vscode_1.FileType.Directory) {
                this.stepIn();
            }
            else {
                const fileName = joinPath([...this.path, item.name]);
                const uri = vscode_1.Uri.file(fileName);
                this.openFile(uri);
            }
        });
    }
    openFile(uri, column = vscode_1.ViewColumn.Active) {
        this.dispose();
        vscode.workspace
            .openTextDocument(uri)
            .then((doc) => vscode.window.showTextDocument(doc, column));
    }
    runAction(item) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            switch (item.action) {
                case Action.NewFolder: {
                    yield vscode.workspace.fs.createDirectory(vscode_1.Uri.file(joinPath(this.path)));
                    yield this.update();
                    break;
                }
                case Action.NewFile: {
                    const uri = vscode_1.Uri.file(joinPath([...this.path, item.name]));
                    this.openFile(uri.with({ scheme: "untitled" }));
                    break;
                }
                case Action.OpenFile: {
                    const path = this.path.slice();
                    if (item.name && item.name.length > 1) {
                        path.push(item.name);
                    }
                    const uri = vscode_1.Uri.file(joinPath(this.path));
                    this.openFile(uri);
                    break;
                }
                case Action.OpenFileBeside: {
                    const path = this.path.slice();
                    if (item.name && item.name.length > 1) {
                        path.push(item.name);
                    }
                    const uri = vscode_1.Uri.file(joinPath(this.path));
                    this.openFile(uri, vscode_1.ViewColumn.Beside);
                    break;
                }
                case Action.RenameFile: {
                    this.keepAlive = true;
                    this.current.hide();
                    const uri = vscode_1.Uri.file(joinPath(this.path));
                    const stat = yield vscode.workspace.fs.stat(uri);
                    const isDir = (stat.type & vscode_1.FileType.Directory) === vscode_1.FileType.Directory;
                    const fileName = this.path.pop() || "";
                    const fileType = isDir ? "folder" : "file";
                    const workspaceFolder = (_a = vscode.workspace.getWorkspaceFolder(uri)) === null || _a === void 0 ? void 0 : _a.uri;
                    const relPath = workspaceFolder
                        ? Path.relative(workspaceFolder.path, uri.path)
                        : uri.path;
                    const extension = Path.extname(relPath);
                    const startSelection = relPath.length - fileName.length;
                    const endSelection = startSelection + (fileName.length - extension.length);
                    const result = yield vscode.window.showInputBox({
                        prompt: `Enter the new ${fileType} name`,
                        value: relPath,
                        valueSelection: [startSelection, endSelection],
                    });
                    this.file = fileName;
                    if (result !== undefined) {
                        const newUri = workspaceFolder
                            ? vscode_1.Uri.joinPath(workspaceFolder, result)
                            : vscode_1.Uri.file(result);
                        if ((yield rust_1.Result.try(vscode.workspace.fs.rename(uri, newUri))).isOk()) {
                            this.file = Path.basename(result);
                        }
                        else {
                            vscode.window.showErrorMessage(`Failed to rename ${fileType} "${fileName}"`);
                        }
                    }
                    this.current.show();
                    this.keepAlive = false;
                    this.inActions = false;
                    this.update();
                    break;
                }
                case Action.DeleteFile: {
                    this.keepAlive = true;
                    this.current.hide();
                    const uri = vscode_1.Uri.file(joinPath(this.path));
                    const stat = yield vscode.workspace.fs.stat(uri);
                    const isDir = (stat.type & vscode_1.FileType.Directory) === vscode_1.FileType.Directory;
                    const fileName = this.path.pop() || "";
                    const fileType = isDir ? "folder" : "file";
                    const goAhead = `$(trash) Delete the ${fileType} "${fileName}"`;
                    const result = yield vscode.window.showQuickPick(["$(close) Cancel", goAhead], {});
                    if (result === goAhead) {
                        const delOp = yield rust_1.Result.try(vscode.workspace.fs.delete(uri, { recursive: isDir }));
                        if (delOp.isErr()) {
                            vscode.window.showErrorMessage(`Failed to delete ${fileType} "${fileName}"`);
                        }
                    }
                    this.current.show();
                    this.keepAlive = false;
                    this.inActions = false;
                    this.update();
                    break;
                }
                case Action.OpenFolder: {
                    const uri = vscode_1.Uri.file(joinPath(this.path));
                    vscode.commands.executeCommand("vscode.openFolder", uri);
                    break;
                }
                default:
                    throw new Error(`Unhandled action ${item.action}`);
            }
        });
    }
}
function activate(context) {
    setContext(false);
    context.subscriptions.push(vscode.commands.registerCommand("file-browser.open", () => {
        var _a;
        const document = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document;
        let path = (vscode.workspace.rootPath || OS.homedir()) + Path.sep;
        if (document && !document.isUntitled) {
            path = document.fileName;
        }
        active = rust_1.Some(new FileBrowser(path));
        setContext(true);
    }));
    context.subscriptions.push(vscode.commands.registerCommand("file-browser.stepIn", () => active.ifSome((active) => active.stepIn())));
    context.subscriptions.push(vscode.commands.registerCommand("file-browser.stepOut", () => active.ifSome((active) => active.stepOut())));
    context.subscriptions.push(vscode.commands.registerCommand("file-browser.actions", () => active.ifSome((active) => active.actions())));
    context.subscriptions.push(vscode.commands.registerCommand("file-browser.tabNext", () => active.ifSome((active) => active.tabCompletion(true))));
    context.subscriptions.push(vscode.commands.registerCommand("file-browser.tabPrev", () => active.ifSome((active) => active.tabCompletion(false))));
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map