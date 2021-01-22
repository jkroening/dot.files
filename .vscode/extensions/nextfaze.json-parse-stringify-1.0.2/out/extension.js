"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const lib_1 = require("./lib");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.stringifyJson', lib_1.replaceSelectedWithStringified));
    context.subscriptions.push(vscode.commands.registerCommand('extension.parseJson', lib_1.replaceSelectedWithParsed));
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map