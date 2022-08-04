import { PaymentStatus } from '../../common/payment-status';
import { ApiClient } from '../clients/api-client';
import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { Receipt } from './common/receipt';
/** @see https://oplata.tinkoff.ru/develop/api/payments/cancel-request/ */
export interface CancelPaymentRequestPayload {
    /** Идентификатор платежа в системе банка	*/
    PaymentId: number;
    /** В статусах NEW и AUTHORIZED возможен только полный возврат, поэтому параметр игнорируется	*/
    Amount?: number;
    IP?: string;
    Token?: string;
    /** В чеке указываются данные товаров, подлежащих возврату */
    Receipt?: Receipt;
}
export interface CancelPaymentResponsePayload extends BaseResponsePayload {
    TerminalKey: string;
    OrderId: string;
    Success: boolean;
    Status: PaymentStatus;
    PaymentId: number;
    /** Код ошибки Если ошибки не произошло, передайте значение «0»	 */
    ErrorCode: string;
    /** Краткое описание ошибки	*/
    Message: string;
    /** Подробное описание ошибки	*/
    Details: string;
    /** Сумма до возврата в копейках */
    OriginalAmount: number;
    /** Сумма после возврата в копейках	*/
    NewAmount: number;
}
export declare function cancelPayment(options: {
    apiClient: ApiClient;
    payload: CancelPaymentRequestPayload;
}): Promise<CancelPaymentResponsePayload>;
