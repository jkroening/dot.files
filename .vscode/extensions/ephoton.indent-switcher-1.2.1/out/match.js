"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
/**
 * get range of indent target
 *
 * @export
 * @param {TextEditor} editor
 * @param {RegExp} regex
 * @param {ISwitchOptions} pattern
 * @returns {Range[]}
 */
function getRange(editor, pattern) {
    // const lineRegex = /\n.*/g;
    const regex = /^\s+/;
    const document = editor.document;
    const source = document.getText();
    const matches = [];
    source.split('\n').forEach((line, index) => {
        const match = regex.exec(line);
        const spaceNumber = match && match[0] && match[0].length;
        const indents = Math.floor(spaceNumber / pattern.from);
        if (spaceNumber && (spaceNumber / pattern.from === indents)) {
            matches.push({
                range: new vscode_1.Range(new vscode_1.Position(index, 0), new vscode_1.Position(index, spaceNumber)),
                indents
            });
        }
    });
    return matches;
}
exports.getRange = getRange;
/**
 * get spaces for replacement
 *
 * @export
 * @param {string} target
 * @param {number} indents
 * @returns {string}
 */
function getSpaces(target, indents) {
    let res = '';
    for (let i = 0; i < indents; i++) {
        res += target;
    }
    return res;
}
exports.getSpaces = getSpaces;
//# sourceMappingURL=match.js.map