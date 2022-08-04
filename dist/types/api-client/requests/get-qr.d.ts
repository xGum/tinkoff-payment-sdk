import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { DataTypeQr } from './common/data-type-qr';
export interface GetQrRequestPayload {
    /** PaymentId покупателя в системе Продавца	*/
    PaymentId: number;
    /** Тип возвращаемых данных: PAYLOAD IMAGE */
    DataType?: DataTypeQr;
}
export interface GetQrResponsePayload extends BaseResponsePayload {
    /** Уникальный номер заказа в системе Продавца	*/
    OrderId: string;
    Data: string;
    /** Уникальный идентификатор транзакции в системе Банка */
    PaymentId: number;
}
export declare const getQr: (options: {
    apiClient: import("../clients/base-client").BaseClient;
    payload: GetQrRequestPayload;
}) => Promise<GetQrResponsePayload>;
