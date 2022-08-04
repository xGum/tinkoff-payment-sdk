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
exports.finishAuthorize = void 0;
const http_client_1 = require("../../http-client/http-client");
const schema_1 = require("../../serialization/schema");
const receipt_1 = require("./common/receipt");
var ERoute;
(function (ERoute) {
    ERoute["ACQ"] = "ACQ";
})(ERoute || (ERoute = {}));
var ESource;
(function (ESource) {
    ESource["Cards"] = "Cards";
    ESource["ApplePay"] = "ApplePay";
    ESource["GooglePay"] = "GooglePay";
})(ESource || (ESource = {}));
const finishAuthorizeRequestSchema = [
    {
        property: 'Amount',
        type: schema_1.SchemaPropertyType.MoneyToPenny,
        optional: true,
    },
    {
        property: 'RedirectDueDate',
        type: schema_1.SchemaPropertyType.DateToString,
        optional: true,
    },
];
const finishAuthorizeResponseSchema = [
    {
        property: 'Amount',
        type: schema_1.SchemaPropertyType.MoneyFromPenny,
    },
    {
        property: 'ExpDate',
        type: schema_1.SchemaPropertyType.ExpDateFromString,
    }
];
//==========//
// FUNCTION //
//==========//
async function finishAuthorize(options) {
    const { apiClient } = options;
    const _a = options.payload, { CardData } = _a, restPayload = __rest(_a, ["CardData"]);
    const $payload = Object.assign({}, restPayload);
    if (CardData) {
        $payload.CardData = receipt_1.validateAndPrepareCardData(CardData);
    }
    const response = await apiClient.sendRequest({
        request: {
            url: 'FinishAuthorize',
            method: http_client_1.HttpRequestMethod.POST,
            payload: $payload,
        },
        requestSchema: finishAuthorizeRequestSchema,
        responseSchema: finishAuthorizeResponseSchema,
    });
    return response.payload;
}
exports.finishAuthorize = finishAuthorize;
//# sourceMappingURL=finish-authorize.js.map