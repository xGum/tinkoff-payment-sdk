"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookHandler = exports.successResponse = void 0;
const sdk_error_1 = require("../common/sdk-error");
const signature_1 = require("../common/signature");
const serializer_1 = require("../serialization/serializer");
const webhook_payload_1 = require("./webhook-payload");
exports.successResponse = {
    status: 200,
    payload: 'OK',
};
class WebhookHandler {
    constructor(options) {
        this.options = options;
    }
    handleWebhookRequest(request) {
        const { terminalKey, password } = this.options;
        let payload = request.payload;
        if (!payload) {
            throw new sdk_error_1.SdkError({
                message: 'Missing payload from the webhook request',
            });
        }
        // Validating request token
        // -----
        const checkToken = signature_1.generateSignature({
            payload,
            password,
        });
        if ((payload === null || payload === void 0 ? void 0 : payload.Token) !== checkToken) {
            throw new sdk_error_1.SdkError({
                payload,
                message: 'Incorrect webhook request token',
            });
        }
        // Deserializing request payload
        payload = serializer_1.serializeData({
            data: payload,
            schema: webhook_payload_1.webhookPayloadSchema,
        });
        // Validating terminal key
        // -----
        if (payload.TerminalKey !== terminalKey) {
            throw new sdk_error_1.SdkError({
                payload,
                message: 'Incorrect webhook request terminal key',
            });
        }
        // -----
        return {
            payload,
            response: exports.successResponse,
        };
    }
}
exports.WebhookHandler = WebhookHandler;
//# sourceMappingURL=webhook-handler.js.map