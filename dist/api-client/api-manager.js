"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiManagerMerchant = exports.ApiManager = void 0;
const api_client_1 = require("./clients/api-client");
const merchant_client_1 = require("./clients/merchant-client");
const add_card_1 = require("./requests/add-card");
const add_customer_1 = require("./requests/add-customer");
const cancel_payment_1 = require("./requests/cancel-payment");
const charge_payment_1 = require("./requests/charge-payment");
const confirm_payment_1 = require("./requests/confirm-payment");
const get_card_list_1 = require("./requests/get-card-list");
const get_customer_1 = require("./requests/get-customer");
const get_state_1 = require("./requests/get-state");
const get_qr_1 = require("./requests/get-qr");
const get_static_qr_1 = require("./requests/get-static-qr");
const add_account_qr_1 = require("./requests/add-account-qr");
const charge_qr_1 = require("./requests/charge-qr");
const qr_members_list_1 = require("./requests/qr-members-list");
const check_order_1 = require("./requests/check-order");
const init_payment_1 = require("./requests/init-payment");
const payment_1 = require("./requests/payment");
const remove_card_1 = require("./requests/remove-card");
const remove_customer_1 = require("./requests/remove-customer");
class BaseApiManager {
}
/**
 * Just a wrapper around `ApiClient` and all the request functions to
 * simplify the SDK usage.
 */
class ApiManager extends BaseApiManager {
    constructor(options) {
        super();
        this.apiClient = new api_client_1.ApiClient(options);
    }
    initPayment(payload) {
        return init_payment_1.initPayment({
            apiClient: this.apiClient,
            payload,
        });
    }
    cancelPayment(payload) {
        return cancel_payment_1.cancelPayment({
            apiClient: this.apiClient,
            payload,
        });
    }
    confirmPayment(payload) {
        return confirm_payment_1.confirmPayment({
            apiClient: this.apiClient,
            payload,
        });
    }
    chargePayment(payload) {
        return charge_payment_1.chargePayment({
            apiClient: this.apiClient,
            payload,
        });
    }
    getState(payload) {
        return get_state_1.getState({
            apiClient: this.apiClient,
            payload,
        });
    }
    getQr(payload) {
        return get_qr_1.getQr({
            apiClient: this.apiClient,
            payload,
        });
    }
    addAccountQr(payload) {
        return add_account_qr_1.addAccountQr({
            apiClient: this.apiClient,
            payload,
        });
    }
    chargeQr(payload) {
        return charge_qr_1.chargeQr({
            apiClient: this.apiClient,
            payload,
        });
    }
    getStaticQr(payload) {
        return get_static_qr_1.getStaticQr({
            apiClient: this.apiClient,
            payload,
        });
    }
    getQrMembersList(payload) {
        return qr_members_list_1.getQrMembersList({
            apiClient: this.apiClient,
            payload,
        });
    }
    checkOrder(payload) {
        return check_order_1.checkOrder({
            apiClient: this.apiClient,
            payload,
        });
    }
}
exports.ApiManager = ApiManager;
class ApiManagerMerchant extends BaseApiManager {
    constructor(options, signProvider) {
        super();
        this.apiClient = new merchant_client_1.MerchantClient(options, signProvider);
    }
    addCustomer(payload) {
        return add_customer_1.addCustomer({
            apiClient: this.apiClient,
            payload,
        });
    }
    getCustomer(payload) {
        return get_customer_1.getCustomer({
            apiClient: this.apiClient,
            payload,
        });
    }
    removeCustomer(payload) {
        return remove_customer_1.removeCustomer({
            apiClient: this.apiClient,
            payload,
        });
    }
    addCard(payload) {
        return add_card_1.addCard({
            apiClient: this.apiClient,
            payload,
        });
    }
    getCardList(payload) {
        return get_card_list_1.getCardList({
            apiClient: this.apiClient,
            payload,
        });
    }
    removeCard(payload) {
        return remove_card_1.removeCard({
            apiClient: this.apiClient,
            payload,
        });
    }
    initPayment(payload) {
        return init_payment_1.initPayment({
            apiClient: this.apiClient,
            payload,
        });
    }
    payment(payload) {
        return payment_1.payment({
            apiClient: this.apiClient,
            payload,
        });
    }
    getState(payload) {
        return get_state_1.getState({
            apiClient: this.apiClient,
            payload,
        });
    }
}
exports.ApiManagerMerchant = ApiManagerMerchant;
//# sourceMappingURL=api-manager.js.map