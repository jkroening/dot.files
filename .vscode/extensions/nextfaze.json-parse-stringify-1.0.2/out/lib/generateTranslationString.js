"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const copypaste = require("copy-paste");
const vscode = require("vscode");
function generateTranslationString() {
    return __awaiter(this, void 0, void 0, function* () {
        const settings = getCurrentVscodeSettings();
        // Get the active editor window
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showWarningMessage('Select text to translate');
            return;
        }
        // Fetch the selected text
        const selectedText = editor.document.getText(editor.selection);
        if (!selectedText) {
            vscode.window.showInformationMessage('Select text to translate');
            return;
        }
        let input = (yield vscode.window.showInputBox({
            prompt: 'Enter a key for this translation or leave blank to use value',
            placeHolder: 'e.g. "hello world" will generate a key named "HELLO_WORLD"'
        })) || selectedText;
        const key = getTranslationKeyFromString(input, settings.get('caseMode'), settings.get('autocapitalize'));
        // Generate a json key/value pair
        const value = `"${key}": "${selectedText}"`;
        // Copy the translation json to the clipboard
        copypaste.copy(value);
        if (settings.get('replaceOnTranslate')) {
            // Replace the selection text with the translated key
            const padding = settings.padding ? ' ' : '';
            const quote = settings.quote;
            const translation = `{{${padding}${quote}${key}${quote} | ${settings.translatePipeName}${padding}}}`;
            editor.edit(builder => {
                builder.replace(editor.selection, translation);
            });
        }
    });
}
exports.generateTranslationString = generateTranslationString;
function getTranslationKeyFromString(input, caseMode = 'snake', autocapitalize = true) {
    if (caseMode === 'camel') {
        return camelize(input);
    }
    else if (caseMode === 'snake') {
        if (autocapitalize) {
            return input.toUpperCase().replace(/ /g, '_');
        }
        else {
            return input.replace(/ /g, '_');
        }
    }
}
exports.getTranslationKeyFromString = getTranslationKeyFromString;
function camelize(str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
    })
        .replace(/\s+/g, '');
}
exports.camelize = camelize;
function getCurrentVscodeSettings() {
    return vscode.workspace.getConfiguration('ngx-translate-quickcreate');
}
exports.getCurrentVscodeSettings = getCurrentVscodeSettings;
//# sourceMappingURL=generateTranslationString.js.map