import { HttpRequest, HttpResponse } from '../http-client/http-client';
import { WebhookPayload } from './webhook-payload';
export interface WebhookHandlerOptions {
    terminalKey: string;
    password: string;
}
export declare const successResponse: HttpResponse;
export declare class WebhookHandler {
    private readonly options;
    constructor(options: WebhookHandlerOptions);
    handleWebhookRequest(request: HttpRequest<WebhookPayload>): {
        payload: WebhookPayload;
        response: HttpResponse;
    };
}
