"use strict";
/** @see http://static2.tinkoff.ru/acquiring/manuals/merchant_api_protocoI_e2c.pdf */
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
exports.addCustomer = void 0;
const http_client_1 = require("../../http-client/http-client");
const addCustomerRequestSchema = [];
const addCustomerResponseSchema = [];
//==========//
// FUNCTION //
//==========//
async function addCustomer(options) {
    const { apiClient } = options;
    const restPayload = __rest(options.payload, []);
    const $payload = Object.assign({}, restPayload);
    const response = await apiClient.sendRequest({
        request: {
            url: 'AddCustomer',
            method: http_client_1.HttpRequestMethod.POST,
            payload: $payload,
        },
        requestSchema: addCustomerRequestSchema,
        responseSchema: addCustomerResponseSchema,
    });
    return response.payload;
}
exports.addCustomer = addCustomer;
//# sourceMappingURL=add-customer.js.map