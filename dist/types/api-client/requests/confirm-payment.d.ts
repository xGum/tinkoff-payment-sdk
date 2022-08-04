import { ApiClient } from '../clients/api-client';
import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { Receipt } from './common/receipt';
/** @see https://oplata.tinkoff.ru/develop/api/payments/confirm-request/ */
export interface ConfirmPaymentRequestPayload {
    /** Идентификатор платежа в системе банка	*/
    PaymentId: number;
    /** Сумма в копейках */
    Amount?: number;
    /** IP-адрес покупателя	*/
    IP?: string;
    /** https://oplata.tinkoff.ru/develop/api/request-sign/ */
    Token?: string;
    /** Массив данных чека. См. https://oplata.tinkoff.ru/develop/api/payments/init-request/#Receipt */
    Receipt?: Receipt;
}
/** https://oplata.tinkoff.ru/develop/api/autopayments/confirm-response/ */
export interface ConfirmPaymentResponsePayload extends BaseResponsePayload {
    /** Идентификатор заказа в системе продавца	*/
    OrderId: string;
    /** Сумма в копейках */
    Amount: number;
    /** Уникальный идентификатор транзакции в системе банка	*/
    PaymentId: number;
}
export declare function confirmPayment(options: {
    apiClient: ApiClient;
    payload: ConfirmPaymentRequestPayload;
}): Promise<ConfirmPaymentResponsePayload>;
