import { SignProvider } from '../sign-providers/sign-provider';
import { ApiClientOptions, BaseClient } from './clients/base-client';
import { AddCardRequestPayload, AddCardResponsePayload } from './requests/add-card';
import { AddCustomerRequestPayload, AddCustomerResponsePayload } from './requests/add-customer';
import { CancelPaymentRequestPayload, CancelPaymentResponsePayload } from './requests/cancel-payment';
import { ChargePaymentRequestPayload, ChargePaymentResponsePayload } from './requests/charge-payment';
import { ConfirmPaymentRequestPayload, ConfirmPaymentResponsePayload } from './requests/confirm-payment';
import { GetCardListRequestPayload, GetCardListResponsePayload } from './requests/get-card-list';
import { GetCustomerRequestPayload, GetCustomerResponsePayload } from './requests/get-customer';
import { GetStateRequestPayload, GetStateResponsePayload } from './requests/get-state';
import { GetQrRequestPayload, GetQrResponsePayload } from './requests/get-qr';
import { GetStaticQrRequestPayload, GetStaticQrResponsePayload } from './requests/get-static-qr';
import { AddAccountQrRequestPayload, AddAccountQrResponsePayload } from './requests/add-account-qr';
import { ChargeQrRequestPayload, ChargeQrResponsePayload } from './requests/charge-qr';
import { QrMembersListRequestPayload, QrMembersListResponsePayload } from './requests/qr-members-list';
import { CheckOrderRequestPayload, CheckOrderResponsePayload } from './requests/check-order';
import { InitPaymentRequestPayload, InitPaymentResponsePayload } from './requests/init-payment';
import { PaymentRequestPayload, PaymentResponsePayload } from './requests/payment';
import { RemoveCardRequestPayload, RemoveCardResponsePayload } from './requests/remove-card';
import { RemoveCustomerRequestPayload, RemoveCustomerResponsePayload } from './requests/remove-customer';
declare abstract class BaseApiManager {
    protected apiClient: BaseClient;
}
/**
 * Just a wrapper around `ApiClient` and all the request functions to
 * simplify the SDK usage.
 */
export declare class ApiManager extends BaseApiManager {
    constructor(options: ApiClientOptions);
    initPayment(payload: InitPaymentRequestPayload): Promise<InitPaymentResponsePayload>;
    cancelPayment(payload: CancelPaymentRequestPayload): Promise<CancelPaymentResponsePayload>;
    confirmPayment(payload: ConfirmPaymentRequestPayload): Promise<ConfirmPaymentResponsePayload>;
    chargePayment(payload: ChargePaymentRequestPayload): Promise<ChargePaymentResponsePayload>;
    getState(payload: GetStateRequestPayload): Promise<GetStateResponsePayload>;
    getQr(payload: GetQrRequestPayload): Promise<GetQrResponsePayload>;
    addAccountQr(payload: AddAccountQrRequestPayload): Promise<AddAccountQrResponsePayload>;
    chargeQr(payload: ChargeQrRequestPayload): Promise<ChargeQrResponsePayload>;
    getStaticQr(payload: GetStaticQrRequestPayload): Promise<GetStaticQrResponsePayload>;
    getQrMembersList(payload: QrMembersListRequestPayload): Promise<QrMembersListResponsePayload>;
    checkOrder(payload: CheckOrderRequestPayload): Promise<CheckOrderResponsePayload>;
}
export declare class ApiManagerMerchant extends BaseApiManager {
    constructor(options: ApiClientOptions, signProvider: SignProvider);
    addCustomer(payload: AddCustomerRequestPayload): Promise<AddCustomerResponsePayload>;
    getCustomer(payload: GetCustomerRequestPayload): Promise<GetCustomerResponsePayload>;
    removeCustomer(payload: RemoveCustomerRequestPayload): Promise<RemoveCustomerResponsePayload>;
    addCard(payload: AddCardRequestPayload): Promise<AddCardResponsePayload>;
    getCardList(payload: GetCardListRequestPayload): Promise<GetCardListResponsePayload>;
    removeCard(payload: RemoveCardRequestPayload): Promise<RemoveCardResponsePayload>;
    initPayment(payload: InitPaymentRequestPayload): Promise<InitPaymentResponsePayload>;
    payment(payload: PaymentRequestPayload): Promise<PaymentResponsePayload>;
    getState(payload: GetStateRequestPayload): Promise<GetStateResponsePayload>;
}
export {};
