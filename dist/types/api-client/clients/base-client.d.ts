import { BaseResponsePayload } from '../..';
import { HttpClient, HttpRequest, HttpResponse } from '../../http-client/http-client';
import { Loggable, LoggableOptions } from '../../logger/logger';
import { Schema } from '../../serialization/schema';
export interface ApiClientOptions extends LoggableOptions {
    httpClient: HttpClient;
    terminalKey: string;
    password: string;
    baseUrl?: string;
    userAgent?: string;
}
export declare abstract class BaseClient extends Loggable {
    protected readonly options: ApiClientOptions;
    constructor(options: ApiClientOptions, defaultOptions?: Partial<ApiClientOptions>);
    abstract sendRequest<ResponsePayloadType extends BaseResponsePayload>(options: {
        request: HttpRequest;
        requestSchema: Schema;
        responseSchema: Schema;
        skipVerification?: boolean;
    }): Promise<HttpResponse<ResponsePayloadType>>;
    protected applyBaseUrl(request: HttpRequest): void;
    protected serializeRequest(request: HttpRequest, schema: Schema): void;
    protected serializeForm(request: HttpRequest, schema: Schema): void;
    protected deserializeResponse(response: HttpResponse, schema: Schema): void;
    protected addSignatureToken(request: HttpRequest): void;
    protected addTerminalKey(request: HttpRequest): void;
    protected handleHeaders(request: HttpRequest): void;
}
