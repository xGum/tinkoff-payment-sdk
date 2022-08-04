"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GotHttpClient = void 0;
/**
 * An HTTP client implementation adapter using Got HTTP client.
 *
 * The user will need to provide a Got instance,
 * which could be pre-configured with custom options
 * (e.g. timeout, retries, etc).
 */
class GotHttpClient {
    constructor(options) {
        this.options = options;
    }
    async sendRequest(options) {
        const { got } = this.options;
        const { url, method, payload, headers, asForm, } = options;
        let response;
        if (!asForm) {
            response = await got(url, {
                method,
                headers,
                json: payload,
                responseType: 'json',
            });
        }
        else {
            response = await got(url, {
                method,
                headers,
                form: payload,
                responseType: 'json',
            });
        }
        return {
            status: response.statusCode,
            payload: response.body,
        };
    }
}
exports.GotHttpClient = GotHttpClient;
//# sourceMappingURL=got-http-client.js.map