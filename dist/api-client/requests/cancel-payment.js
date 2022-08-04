"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelPayment = void 0;
const http_client_1 = require("../../http-client/http-client");
const schema_1 = require("../../serialization/schema");
const receipt_1 = require("./common/receipt");
const cancelPaymentRequestSchema = [
    {
        property: 'Amount',
        type: schema_1.SchemaPropertyType.MoneyToPenny,
        optional: true,
    },
];
const cancelPaymentResponseSchema = [
    {
        property: 'OriginalAmount',
        type: schema_1.SchemaPropertyType.MoneyFromPenny,
    },
    {
        property: 'NewAmount',
        type: schema_1.SchemaPropertyType.MoneyFromPenny,
    },
];
//==========//
// FUNCTION //
//==========//
async function cancelPayment(options) {
    const { apiClient } = options;
    const _a = options.payload, { Receipt } = _a, restPayload = __rest(_a, ["Receipt"]);
    const $payload = Object.assign({}, restPayload);
    if (Receipt) {
        $payload.Receipt = receipt_1.validateAndPrepareReceipt(Receipt);
    }
    const response = await apiClient.sendRequest({
        request: {
            url: 'Cancel',
            method: http_client_1.HttpRequestMethod.POST,
            payload: $payload,
        },
        requestSchema: cancelPaymentRequestSchema,
        responseSchema: cancelPaymentResponseSchema,
    });
    return response.payload;
}
exports.cancelPayment = cancelPayment;
//# sourceMappingURL=cancel-payment.js.map