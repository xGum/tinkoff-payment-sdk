import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { Payments } from './common/payments';
export interface CheckOrderRequestPayload {
    /** Номер заказа в системе Продавца	*/
    OrderId: number | string;
}
export interface CheckOrderResponsePayload extends BaseResponsePayload {
    /** Уникальный номер заказа в системе Продавца	*/
    OrderId: string;
    /** Детали */
    Payments: Payments;
}
export declare const checkOrder: (options: {
    apiClient: import("../clients/base-client").BaseClient;
    payload: CheckOrderRequestPayload;
}) => Promise<CheckOrderResponsePayload>;
