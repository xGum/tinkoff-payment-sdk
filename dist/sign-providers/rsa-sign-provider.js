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
exports.RSASignProvider = void 0;
const crypto = __importStar(require("crypto"));
const fs_1 = require("fs");
const crypto_js_1 = __importDefault(require("crypto-js"));
const sdk_error_1 = require("../common/sdk-error");
const logger_1 = require("../logger/logger");
const sign_provider_1 = require("./sign-provider");
const defaultOptions = {};
/** https://acdn.tinkoff.ru/static/documents/merchant_api_protocoI_e2c.pdf */
class RSASignProvider extends sign_provider_1.SignProvider {
    constructor(options) {
        super();
        this.options = Object.assign({}, defaultOptions, (options || {}));
        if (this.options.privateKeyFile) {
            this.privateKey = fs_1.readFileSync(this.options.privateKeyFile);
        }
        if (this.options.privateKeyString) {
            this.privateKey = Buffer.from(this.options.privateKeyString);
        }
        if (!this.privateKey) {
            throw new sdk_error_1.SdkError({
                message: 'Cant initialize RSA sign provider without private key. Set one of the options: privateKeyFile or privateKeyFile',
            });
        }
        if (this.options.X509SerialNumber) {
            this.X509SerialNumber = this.options.X509SerialNumber;
        }
        if (!this.X509SerialNumber) {
            throw new sdk_error_1.SdkError({
                message: 'Cant initialize RSA sign provider without X509SerialNumber. Please, set up this value in options',
            });
        }
    }
    signRequestPayload(payload) {
        const DigestValue = this.digest(payload);
        const line = this.compactParameters(payload);
        this.log(logger_1.SdkLogLevel.debug, 'RSA Sign Provider: compacted params: ', line);
        this.log(logger_1.SdkLogLevel.debug, 'Digest value: ', DigestValue);
        const SignatureValue = this.signLine(line);
        return Object.assign(Object.assign({}, payload), { DigestValue,
            SignatureValue, X509SerialNumber: this.X509SerialNumber });
    }
    setFormType(request) {
        return request;
    }
    digestLine(line) {
        const data = crypto_js_1.default.SHA256(line);
        return crypto_js_1.default.enc.Base64.stringify(data);
    }
    signLine(line) {
        const hash = crypto.createHash('SHA256').update(line).digest();
        const sign = crypto.createSign('RSA-SHA256').update(hash);
        return sign.sign(this.privateKey, 'base64');
    }
}
exports.RSASignProvider = RSASignProvider;
//# sourceMappingURL=rsa-sign-provider.js.map