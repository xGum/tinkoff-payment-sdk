"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchantClient = void 0;
const consts_1 = require("../../common/consts");
const sdk_error_1 = require("../../common/sdk-error");
const logger_1 = require("../../logger/logger");
const base_client_1 = require("./base-client");
const merchantClientDefaultOptions = {
    baseUrl: consts_1.TINKOFF_API_MERCHANT_URL,
    userAgent: 'Tinkoff Payment Node.js SDK (https://github.com/jfkz/tinkoff-payment-sdk)',
};
/**
 * A generic API client that encapsulates all communications
 * with Tinkoff Payment API using the provided low-level HTTP client.
 */
class MerchantClient extends base_client_1.BaseClient {
    constructor(options, signProvider) {
        const thisOptions = Object.assign({}, merchantClientDefaultOptions, (options || {}));
        super(options, thisOptions);
        this.signProvider = signProvider;
    }
    async sendRequest(options) {
        const { httpClient } = this.options;
        const { request, requestSchema, responseSchema, } = options;
        this.signProvider.setFormType(request);
        this.applyBaseUrl(request);
        this.serializeRequest(request, requestSchema);
        this.addTerminalKey(request);
        request.payload = this.signProvider.signRequestPayload(request.payload);
        this.handleHeaders(request);
        this.log(logger_1.SdkLogLevel.debug, request);
        // Using low-level transport to send the request
        const response = await httpClient.sendRequest(request);
        this.log(logger_1.SdkLogLevel.debug, response);
        if (options.skipVerification) {
            return response;
        }
        if (typeof response.payload === 'string') {
            response.payload = JSON.parse(response.payload);
        }
        this.deserializeResponse(response, responseSchema);
        const { payload } = response;
        // Throwing error in case if request failed
        if (payload.ErrorCode !== '0') {
            throw new sdk_error_1.SdkError({ payload });
        }
        return response;
    }
}
exports.MerchantClient = MerchantClient;
//# sourceMappingURL=merchant-client.js.map