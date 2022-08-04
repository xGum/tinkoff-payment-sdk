"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignProvider = void 0;
const _ = __importStar(require("lodash"));
const logger_1 = require("../logger/logger");
class SignProvider extends logger_1.Loggable {
    setFormType(request) {
        request.asForm = true;
        return request;
    }
    compactParameters(payload) {
        const exludeFields = [
            // Documented fields
            'DigestValue',
            'SignatureValue',
            'X509SerialNumber',
        ];
        if (payload.DATA && typeof payload.DATA !== 'string') {
            exludeFields.push('DATA');
        }
        const line = _.keys(payload)
            .filter((key) => {
            return !exludeFields.includes(key);
        })
            .sort()
            .reduce((l, key) => {
            return l + payload[key];
        }, '');
        return line;
    }
    digest(payload) {
        const line = this.compactParameters(payload);
        return this.digestLine(line);
    }
    /**
     * Return sign by line. Check options to set up parameters
     * @param hash base64 encoded line
     */
    sign(hash) {
        return this.signLine(hash);
    }
}
exports.SignProvider = SignProvider;
//# sourceMappingURL=sign-provider.js.map