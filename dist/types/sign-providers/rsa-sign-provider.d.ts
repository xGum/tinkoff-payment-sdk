import { PayloadType } from '../common/payload-type';
import { HttpRequest } from '../http-client/http-client';
import { SignProvider } from './sign-provider';
export interface RSASignProviderOptions {
    privateKeyFile?: string;
    privateKeyString?: string;
    X509SerialNumber?: string;
}
/** https://acdn.tinkoff.ru/static/documents/merchant_api_protocoI_e2c.pdf */
export declare class RSASignProvider extends SignProvider {
    signRequestPayload(payload: PayloadType): PayloadType;
    private options;
    private readonly privateKey;
    private readonly X509SerialNumber;
    constructor(options: RSASignProviderOptions);
    setFormType(request: HttpRequest): HttpRequest;
    protected digestLine(line: string): string;
    protected signLine(line: string): string;
}
