import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { DataTypeQr } from './common/data-type-qr';
export interface GetStaticQrRequestPayload {
    /** Тип возвращаемых данных: PAYLOAD IMAGE */
    Data?: DataTypeQr;
}
export interface GetStaticQrResponsePayload extends BaseResponsePayload {
    Data: string;
}
export declare const getStaticQr: (options: {
    apiClient: import("../clients/base-client").BaseClient;
    payload: GetStaticQrRequestPayload;
}) => Promise<GetStaticQrResponsePayload>;
