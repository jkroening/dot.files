"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the necessary extensibility types to use in your code below
const vscode_1 = require("vscode");
const match_1 = require("./match");
const SwitchFrom4To2 = {
    from: 4,
    to: 2
};
const SwitchFrom2To4 = {
    from: 2,
    to: 4
};
const languages = [
    'javascript',
    'javascriptreact',
    'typescript',
    'typescriptreact',
    'vue'
];
// This method is called when your extension is activated. Activation is
// controlled by the activation events defined in package.json.
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error).
    // This line of code will only be executed once when your extension is activated.
    console.log('Congratulations, your extension "IndentSwitcher" is now active!');
    // create a new word counter
    const indentManager = new IndentManager();
    const config = vscode_1.workspace.getConfiguration();
    vscode_1.commands.registerTextEditorCommand('indentSwitcher.si4to2', (editor, edit) => {
        indentManager.switchIndent(SwitchFrom4To2);
    });
    const si24 = vscode_1.commands.registerCommand('indentSwitcher.si2to4', () => {
        indentManager.switchIndent(SwitchFrom2To4);
    });
}
exports.activate = activate;
/**
 * indent manager for commands
 *
 * @class IndentManager
 */
class IndentManager {
    switchIndent(options) {
        const editor = vscode_1.window.activeTextEditor;
        const document = editor.document;
        const language = document.languageId;
        if (!editor) {
            vscode_1.window.showErrorMessage('No file is open!');
            return;
        }
        // if (languages.indexOf(language) < 0) {
        //   window.showInformationMessage(`Language not supported: ${ language }`);
        // }
        try {
            const matches = match_1.getRange(editor, options);
            editor.edit(edit => {
                for (const match of matches) {
                    const { range, indents } = match;
                    const value = match_1.getSpaces(options === SwitchFrom2To4 ? '    ' : '  ', indents);
                    edit.replace(range, value);
                }
            });
            editor.document.save();
        }
        catch (err) {
            vscode_1.window.showErrorMessage(`Indent switch error ${err}`);
        }
    }
}
//# sourceMappingURL=extension.js.map