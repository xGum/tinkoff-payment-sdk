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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoProSignProvider = void 0;
const child_process_1 = require("child_process");
const fs = __importStar(require("fs"));
const path_1 = require("path");
const tmp_1 = __importDefault(require("tmp"));
const data_1 = require("../api-client/requests/common/data");
const sign_provider_1 = require("./sign-provider");
const defaultOptions = {
    cpLocation: '/opt/cprocsp/bin/amd64',
    cpHashAlg: '1.2.643.7.1.1.2.2',
    cpSingAlg: 'GOST12_256',
    cpHideExceptions: true,
};
class CryptoProSignProvider extends sign_provider_1.SignProvider {
    constructor(options) {
        super();
        this.options = Object.assign({}, defaultOptions, options);
    }
    signRequestPayload(payload) {
        if (payload.DATA) {
            payload.DATA = data_1.flatDataObject(payload.DATA);
        }
        const DigestValue = this.digest(payload);
        const SignatureValue = this.sign(DigestValue);
        return Object.assign(Object.assign({}, payload), { DigestValue,
            SignatureValue, X509SerialNumber: 1 });
    }
    digestLine(line) {
        const tmpFilename = tmp_1.default.tmpNameSync();
        const hashFilename = `${tmpFilename}.hsh`;
        const { cpLocation: cryptoProDir, cpHashAlg: hashAlg, cpHideExceptions: hideExceptions, } = this.options;
        const cmdOptions = [
            `${cryptoProDir}/cryptcp`,
            '-hash',
            `-hashAlg ${hashAlg}`,
            `-dir ${path_1.dirname(tmpFilename)}`,
            tmpFilename,
        ];
        const hashCmd = cmdOptions.join(' ');
        let hash = '';
        try {
            fs.writeFileSync(tmpFilename, line);
            child_process_1.execSync(hashCmd);
            hash = fs.readFileSync(hashFilename).toString('base64');
            fs.unlinkSync(tmpFilename);
            fs.unlinkSync(hashFilename);
        }
        catch (err) {
            if (!hideExceptions) {
                throw err;
            }
        }
        return hash;
    }
    signLine(hash) {
        const tmpFilename = tmp_1.default.tmpNameSync();
        const hashFilename = `${tmpFilename}.hsh`;
        const signFilename = `${tmpFilename}.sig`;
        const { cpLocation: cryptoProDir, cpSingAlg: singAlg, cpHideExceptions: hideExceptions, cpContainer: container, cpContainerPassword: containerPassword, } = this.options;
        const cmdOptions = [
            `${cryptoProDir}/csptest`,
            '-keyset',
            `-sign ${singAlg}`,
            `-cont '${container}'`,
            '-keytype exchange',
            `-in ${hashFilename}`,
            `-out ${signFilename}`,
            `-password ${containerPassword}`,
        ];
        const signCmd = cmdOptions.join(' ');
        let sign = '';
        try {
            fs.writeFileSync(hashFilename, Buffer.from(hash, 'base64'));
            child_process_1.execSync(signCmd);
            sign = fs.readFileSync(signFilename).toString('base64');
            fs.unlinkSync(hashFilename);
            fs.unlinkSync(signFilename);
        }
        catch (err) {
            if (!hideExceptions) {
                throw err;
            }
        }
        return sign;
    }
}
exports.CryptoProSignProvider = CryptoProSignProvider;
//# sourceMappingURL=cryptopro-sign-provider.js.map