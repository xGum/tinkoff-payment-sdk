"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseClient = void 0;
const url_1 = require("url");
const signature_1 = require("../../common/signature");
const logger_1 = require("../../logger/logger");
const serializer_1 = require("../../serialization/serializer");
class BaseClient extends logger_1.Loggable {
    constructor(options, defaultOptions = {}) {
        super(options);
        this.options = Object.assign({}, defaultOptions, options);
    }
    applyBaseUrl(request) {
        const { baseUrl } = this.options;
        request.url = (new url_1.URL(request.url, baseUrl)).toString();
    }
    serializeRequest(request, schema) {
        request.payload = serializer_1.serializeData({
            data: request.payload,
            schema,
        });
    }
    serializeForm(request, schema) {
        request.payload = serializer_1.serializeData({
            data: request.payload,
            schema,
        });
    }
    deserializeResponse(response, schema) {
        response.payload = serializer_1.serializeData({
            data: response.payload,
            schema,
            ignoreMissing: true,
        });
    }
    addSignatureToken(request) {
        const { password } = this.options;
        request.payload = signature_1.signRequestPayload({
            payload: request.payload,
            password,
        });
    }
    addTerminalKey(request) {
        const { terminalKey } = this.options;
        Object.assign(request.payload, {
            TerminalKey: terminalKey,
        });
    }
    handleHeaders(request) {
        const { userAgent } = this.options;
        const defaultHeaders = {
            'user-agent': userAgent,
        };
        request.headers = Object.assign({}, defaultHeaders, (request.headers || {}));
    }
}
exports.BaseClient = BaseClient;
//# sourceMappingURL=base-client.js.map