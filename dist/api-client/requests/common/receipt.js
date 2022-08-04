"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAndPrepareReceipt = exports.validateAndPrepareCardData = exports.AgentDataAgentSign = exports.ReceiptTaxation = exports.ReceiptTax = exports.ReceiptPaymentObject = exports.ReceiptPaymentMethod = void 0;
const money_1 = require("../../../serialization/serializers/money");
var ReceiptPaymentMethod;
(function (ReceiptPaymentMethod) {
    ReceiptPaymentMethod["FULL_PAYMENT"] = "full_payment";
    ReceiptPaymentMethod["FULL_PREPAYMENT"] = "full_prepayment";
    ReceiptPaymentMethod["PREPAYMENT"] = "prepayment";
    ReceiptPaymentMethod["ADVANCE"] = "advance";
    ReceiptPaymentMethod["PARTIAL_PAYMENT"] = "partial_payment";
    ReceiptPaymentMethod["CREDIT"] = "credit";
    ReceiptPaymentMethod["CREDIT_PAYMENT"] = "credit_payment";
})(ReceiptPaymentMethod = exports.ReceiptPaymentMethod || (exports.ReceiptPaymentMethod = {}));
var ReceiptPaymentObject;
(function (ReceiptPaymentObject) {
    ReceiptPaymentObject["COMMODITY"] = "commodity";
    ReceiptPaymentObject["EXCISE"] = "excise";
    ReceiptPaymentObject["JOB"] = "job";
    ReceiptPaymentObject["SERVICE"] = "service";
    ReceiptPaymentObject["GAMBLING_BET"] = "gambling_bet";
    ReceiptPaymentObject["GAMBLING_PRIZE"] = "gambling_prize";
    ReceiptPaymentObject["LOTTERY"] = "lottery";
    ReceiptPaymentObject["LOTTERY_PRIZE"] = "lottery_prize";
    ReceiptPaymentObject["INTELLECTUAL_ACTIVITY"] = "intellectual_activity";
    ReceiptPaymentObject["PAYMENT"] = "payment";
    ReceiptPaymentObject["COMPOSITE"] = "composite";
    ReceiptPaymentObject["ANOTHER"] = "another";
})(ReceiptPaymentObject = exports.ReceiptPaymentObject || (exports.ReceiptPaymentObject = {}));
var ReceiptTax;
(function (ReceiptTax) {
    ReceiptTax["NONE"] = "none";
    ReceiptTax["VAT0"] = "vat0";
    ReceiptTax["VAT10"] = "vat10";
    ReceiptTax["VAT20"] = "vat20";
    ReceiptTax["VAT110"] = "vat110";
    ReceiptTax["VAT120"] = "vat120";
})(ReceiptTax = exports.ReceiptTax || (exports.ReceiptTax = {}));
var ReceiptTaxation;
(function (ReceiptTaxation) {
    ReceiptTaxation["OSN"] = "osn";
    ReceiptTaxation["USN_INCOME"] = "usn_income";
    ReceiptTaxation["USN_INCOME_OUTCOME"] = "usn_income_outcome";
    ReceiptTaxation["PATENT"] = "patent";
    ReceiptTaxation["ENVD"] = "envd";
    ReceiptTaxation["ESN"] = "esn";
})(ReceiptTaxation = exports.ReceiptTaxation || (exports.ReceiptTaxation = {}));
var AgentDataAgentSign;
(function (AgentDataAgentSign) {
    AgentDataAgentSign["bank_paying_agent"] = "bank_paying_agent";
    AgentDataAgentSign["bank_paying_subagent"] = "bank_paying_subagent";
    AgentDataAgentSign["paying_agent"] = "paying_agent";
    AgentDataAgentSign["paying_subagent"] = "paying_subagent";
    AgentDataAgentSign["attorney"] = "attorney";
    AgentDataAgentSign["commission_agent"] = "commission_agent";
    AgentDataAgentSign["another"] = "another";
})(AgentDataAgentSign = exports.AgentDataAgentSign || (exports.AgentDataAgentSign = {}));
//===========//
// UTILITIES //
//===========//
function validateAndPrepareCardData(cardData) {
    const dataObj = cardData;
    return Object.keys(cardData).map((key) => `${key}=${dataObj[key]}`).join(';');
}
exports.validateAndPrepareCardData = validateAndPrepareCardData;
function validateAndPrepareReceipt(receipt) {
    if (!receipt.Items) {
        throw new Error('Receipt.Items must be set when receipt is used');
    }
    if (receipt.Items.length === 0) {
        throw new Error('Receipt.Items must contain at least one item');
    }
    return Object.assign(Object.assign({}, receipt), { Items: [...receipt.Items.map(validateAndPrepareReceiptItem)] });
}
exports.validateAndPrepareReceipt = validateAndPrepareReceipt;
function validateAndPrepareReceiptItem(item) {
    const $item = Object.assign({}, item);
    //-------//
    // PRICE //
    //-------//
    if (!$item.Price) {
        throw new Error('Price must be set for receipt item');
    }
    $item.Price = money_1.moneyToPennyOrThrow($item.Price);
    //----------//
    // QUANTITY //
    //----------//
    if ($item.Quantity <= 0) {
        throw new Error('Receipt item quantity must be greater than zero');
    }
    //--------//
    // AMOUNT //
    //--------//
    // Calculating amount automatically, if not defined
    if ($item.Amount === undefined) {
        $item.Amount = ($item.Price * $item.Quantity);
    }
    // -----
    return $item;
}
//# sourceMappingURL=receipt.js.map