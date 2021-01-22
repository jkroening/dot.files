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
exports.getRPath = void 0;
const winreg = require("winreg");
const fs_1 = require("fs");
function getRPath(config) {
    return __awaiter(this, void 0, void 0, function* () {
        // use "old" setting to get path:
        let path = config.get("lsp.path");
        // use "new" setting to get path:
        if (!path) {
            const configEntry = (process.platform === 'win32' ? 'rpath.windows' :
                process.platform === 'darwin' ? 'rpath.mac' :
                    'rpath.linux');
            path = config.get(configEntry);
        }
        if (path && fs_1.existsSync(path)) {
            return path;
        }
        // get path from system if neither setting works:
        if (process.platform === "win32") {
            try {
                const key = new winreg({
                    hive: winreg.HKLM,
                    key: '\\Software\\R-Core\\R'
                });
                const item = yield new Promise((c, e) => key.get('InstallPath', (err, result) => err ? e(err) : c(result)));
                const rhome = item.value;
                console.log("found R in registry:", rhome);
                path = rhome + "\\bin\\R.exe";
            }
            catch (e) {
                path = '';
            }
            if (path && fs_1.existsSync(path)) {
                return path;
            }
        }
        return "R";
    });
}
exports.getRPath = getRPath;
//# sourceMappingURL=util.js.map