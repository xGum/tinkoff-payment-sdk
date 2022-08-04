import { HttpRequest, HttpResponse } from '../../http-client/http-client';
import { Schema } from '../../serialization/schema';
import { ResponsePayload } from '../response-payload';
import { ApiClientOptions, BaseClient } from './base-client';
/**
 * A generic API client that encapsulates all communications
 * with Tinkoff Payment API using the provided low-level HTTP client.
 */
export declare class ApiClient extends BaseClient {
    constructor(options: ApiClientOptions);
    sendRequest<ResponsePayloadType extends ResponsePayload>(options: {
        request: HttpRequest;
        requestSchema: Schema;
        responseSchema: Schema;
    }): Promise<HttpResponse<ResponsePayloadType>>;
}
