"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signRequestPayload = exports.generateSignature = void 0;
const crypto_1 = require("crypto");
/**
 * Generates signature for the specified request payload,
 * using the specified password.
 *
 * See: {@link https://oplata.tinkoff.ru/develop/api/request-sign/ signature generation rules}
 */
function generateSignature(options) {
    const { password, payload } = options;
    const signData = Object.assign(Object.assign({}, payload), { Password: password });
    const ignoredKeys = [
        'Token',
        'Receipt',
        'DATA',
    ];
    const signString = Object.keys(signData)
        .filter(key => !ignoredKeys.includes(key))
        .sort()
        .map(key => signData[key])
        .join('');
    return crypto_1.createHash('sha256')
        .update(signString)
        .digest('hex');
}
exports.generateSignature = generateSignature;
function signRequestPayload(options) {
    const { payload, password } = options;
    return Object.assign(Object.assign({}, payload), { Token: generateSignature({
            payload,
            password,
        }) });
}
exports.signRequestPayload = signRequestPayload;
//# sourceMappingURL=signature.js.map