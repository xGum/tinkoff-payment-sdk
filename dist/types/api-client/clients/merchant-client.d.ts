import { HttpRequest, HttpResponse } from '../../http-client/http-client';
import { Schema } from '../../serialization/schema';
import { SignProvider } from '../../sign-providers/sign-provider';
import { ResponsePayload } from '../response-payload';
import { ApiClientOptions, BaseClient } from './base-client';
/**
 * A generic API client that encapsulates all communications
 * with Tinkoff Payment API using the provided low-level HTTP client.
 */
export declare class MerchantClient extends BaseClient {
    private readonly signProvider;
    constructor(options: ApiClientOptions, signProvider: SignProvider);
    sendRequest<ResponsePayloadType extends ResponsePayload>(options: {
        request: HttpRequest;
        requestSchema: Schema;
        responseSchema: Schema;
        skipVerification?: boolean;
    }): Promise<HttpResponse<ResponsePayloadType>>;
}
