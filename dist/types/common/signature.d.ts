/**
 * Generates signature for the specified request payload,
 * using the specified password.
 *
 * See: {@link https://oplata.tinkoff.ru/develop/api/request-sign/ signature generation rules}
 */
export declare function generateSignature(options: {
    payload: any;
    password: string;
}): string;
export declare function signRequestPayload<PayloadType>(options: {
    payload: PayloadType;
    password: string;
}): (PayloadType & {
    Token: string;
});
