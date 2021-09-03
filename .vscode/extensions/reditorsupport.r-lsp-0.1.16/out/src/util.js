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
exports.getRPath = exports.getRpathFromSystem = void 0;
const winreg = require("winreg");
const fs_1 = require("fs");
const path = require("path");
function getRfromEnvPath(platform) {
    let splitChar = ':';
    let fileExtension = '';
    if (platform === 'win32') {
        splitChar = ';';
        fileExtension = '.exe';
    }
    const os_paths = process.env.PATH.split(splitChar);
    for (const os_path of os_paths) {
        const os_r_path = path.join(os_path, 'R' + fileExtension);
        if (fs_1.existsSync(os_r_path)) {
            return os_r_path;
        }
    }
    return '';
}
function getRpathFromSystem() {
    return __awaiter(this, void 0, void 0, function* () {
        let rpath = '';
        const platform = process.platform;
        rpath = getRfromEnvPath(platform);
        if (!rpath && platform === 'win32') {
            // Find path from registry
            try {
                const key = new winreg({
                    hive: winreg.HKLM,
                    key: '\\Software\\R-Core\\R',
                });
                const item = yield new Promise((c, e) => key.get('InstallPath', (err, result) => err === null ? c(result) : e(err)));
                rpath = path.join(item.value, 'bin', 'R.exe');
            }
            catch (e) {
                rpath = '';
            }
        }
        return rpath;
    });
}
exports.getRpathFromSystem = getRpathFromSystem;
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
        path = yield getRpathFromSystem();
        if (path && fs_1.existsSync(path)) {
            return path;
        }
        return "R";
    });
}
exports.getRPath = getRPath;
//# sourceMappingURL=util.js.map