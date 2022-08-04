"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatus = void 0;
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["NEW"] = "NEW";
    PaymentStatus["FORMSHOWED"] = "FORMSHOWED";
    PaymentStatus["DEADLINE_EXPIRED"] = "DEADLINE_EXPIRED";
    PaymentStatus["CANCELED"] = "CANCELED";
    PaymentStatus["PREAUTHORIZING"] = "PREAUTHORIZING";
    PaymentStatus["AUTHORIZING"] = "AUTHORIZING";
    PaymentStatus["AUTHORIZED"] = "AUTHORIZED";
    PaymentStatus["AUTH_FAIL"] = "AUTH_FAIL";
    PaymentStatus["REJECTED"] = "REJECTED";
    PaymentStatus["_3DS_CHECKING"] = "3DS_CHECKING";
    PaymentStatus["_3DS_CHECKED"] = "3DS_CHECKED";
    PaymentStatus["REVERSING"] = "REVERSING";
    PaymentStatus["PARTIAL_REVERSED"] = "PARTIAL_REVERSED";
    PaymentStatus["REVERSED"] = "REVERSED";
    PaymentStatus["CONFIRMING"] = "CONFIRMING";
    PaymentStatus["CONFIRMED"] = "CONFIRMED";
    PaymentStatus["REFUNDING"] = "REFUNDING";
    PaymentStatus["PARTIAL_REFUNDED"] = "PARTIAL_REFUNDED";
    PaymentStatus["REFUNDED"] = "REFUNDED";
    // Merchant status
    PaymentStatus["CHECKING"] = "CHECKING";
    PaymentStatus["CHECKED"] = "CHECKED";
    PaymentStatus["COMPLETING"] = "COMPLETING";
    PaymentStatus["COMPLETED"] = "COMPLETED";
    PaymentStatus["UNKNOWN"] = "UNKNOWN";
    PaymentStatus["PROCESSING"] = "PROCESSING";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
//# sourceMappingURL=payment-status.js.map