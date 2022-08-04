/** @see http://static2.tinkoff.ru/acquiring/manuals/merchant_api_protocoI_e2c.pdf */
import { BaseClient } from '../clients/base-client';
import { ResponsePayload as BaseResponsePayload } from '../response-payload';
export declare type TCheckType = 'NO' | 'HOLD' | '3DS' | '3DSHOLD';
export interface AddCardRequestPayload {
    /** Идентификатор покупателя в системе Продавца	*/
    CustomerKey: string;
    /** @description Возможные значения:
  1. NO – сохранить карту без проверок. Rebill ID для рекуррентных платежей не возвращается.
  2. HOLD – при сохранении сделать списание и затем отмену на 1 руб. RebillID для рекуррентных платежей возвращается в ответе.
  3. 3DS – при сохранении карты выполнить проверку 3DS и выполнить списание. А затем отмену на 1 р. В этом случае RebillID будет
  только для 3DS карт. Карты, не поддерживающие 3DS, привязаны не будут.
  4. 3DSHOLD – при привязке карты выполняем проверку, поддерживает карта 3DS или нет. Если карта поддерживает 3DS, далее выполняем
  списание и затем отмену на 1 руб. Если карта не поддерживает 3DS, то выполняем списание и затем отмену на произвольную сумму от 100 до
  199 копеек. Клиент будет перенаправлен на страницу для ввода списанной суммы, где должен корректно указать случайную сумму.
  В этом случае успешного подтверждения случайной суммы карта будет привязана и возвращен RebillID */
    CheckType?: TCheckType;
    /** Описание/название карты */
    Description?: string;
    /** Название шаблона формы привязки */
    PayForm?: string;
    /** IP-адрес запроса */
    IP?: string;
}
export interface AddCardResponsePayload extends BaseResponsePayload {
    /** Идентификатор покупателя в системе Продавца	*/
    CustomerKey: string;
    /** Идентификатор запроса на привязку карты */
    RequestKey: string;
    /** Ссылка на страницу привязки карты. На данную страницу необходимо переадресовать клиента для привязки карты. */
    PaymentUrl?: string;
}
export declare function addCard(options: {
    apiClient: BaseClient;
    payload: AddCardRequestPayload;
}): Promise<AddCardResponsePayload>;
