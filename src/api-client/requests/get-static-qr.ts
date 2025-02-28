import { ResponsePayload as BaseResponsePayload } from '../response-payload';
import { buildSendRequestFunction } from './common/request';
import { DataTypeQr } from './common/data-type-qr';

//=========//
// REQUEST //
//=========//

export interface GetStaticQrRequestPayload {
  /** Тип возвращаемых данных: PAYLOAD IMAGE */
  Data?: DataTypeQr;
}


//==========//
// RESPONSE //
//==========//

export interface GetStaticQrResponsePayload extends BaseResponsePayload {
  //** В зависимости от параметра DataType в запросе */
  Data: string;
}


//==========//
// FUNCTION //
//==========//

export const getStaticQr = buildSendRequestFunction<GetStaticQrRequestPayload, GetStaticQrResponsePayload>('GetStaticQr');
