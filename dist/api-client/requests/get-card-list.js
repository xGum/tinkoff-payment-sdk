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
exports.getCardList = exports.ECardType = exports.ECardStatus = void 0;
const http_client_1 = require("../../http-client/http-client");
var ECardStatus;
(function (ECardStatus) {
    ECardStatus["ACTIVE"] = "A";
    ECardStatus["INACTIVE"] = "I";
    ECardStatus["EXPIRED"] = "E";
    ECardStatus["DELETED"] = "D";
})(ECardStatus = exports.ECardStatus || (exports.ECardStatus = {}));
var ECardType;
(function (ECardType) {
    ECardType[ECardType["CREDIT"] = 0] = "CREDIT";
    ECardType[ECardType["DEBET"] = 1] = "DEBET";
    ECardType[ECardType["CREDITDEBIT"] = 2] = "CREDITDEBIT";
})(ECardType = exports.ECardType || (exports.ECardType = {}));
const getCardListRequestSchema = [];
/** TODO: Add verification to ICardInfo */
const getCardListResponseSchema = [];
//==========//
// FUNCTION //
//==========//
async function getCardList(options) {
    const { apiClient } = options;
    const restPayload = __rest(options.payload, []);
    const $payload = Object.assign({}, restPayload);
    const response = await apiClient.sendRequest({
        request: {
            url: 'GetCardList',
            method: http_client_1.HttpRequestMethod.POST,
            payload: $payload,
        },
        requestSchema: getCardListRequestSchema,
        responseSchema: getCardListResponseSchema,
        skipVerification: true,
    });
    if (typeof response.payload === 'string') {
        response.payload = JSON.parse(response.payload);
    }
    return response.payload;
}
exports.getCardList = getCardList;
//# sourceMappingURL=get-card-list.js.map