"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHttpClient = void 0;
/**
 * An HTTP client implementation adapter using Request HTTP client.
 */
class RequestHttpClient {
    constructor(options) {
        this.options = options;
    }
    async sendRequest(options) {
        const { request } = this.options;
        const { url, method, payload, headers, } = options;
        const requestOptions = {
            method,
            headers,
            json: !options.asForm,
            resolveWithFullResponse: true,
            simple: false,
            gzip: true,
        };
        if (options.asForm) {
            requestOptions.form = payload;
        }
        else {
            requestOptions.body = payload;
        }
        const response = await request(url, requestOptions);
        return {
            status: response.statusCode,
            payload: response.body,
        };
    }
}
exports.RequestHttpClient = RequestHttpClient;
//# sourceMappingURL=request-http-client.js.map