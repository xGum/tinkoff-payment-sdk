import { PayloadType } from '../common/payload-type';
import { SignProvider } from './sign-provider';
declare type THashAlgorithm = '1.2.643.7.1.1.2.2' | '1.2.643.7.1.1.2.3' | '1.2.643.2.2.9';
declare type TSignAlgorithm = 'SHA1' | 'SHA256' | 'SHA384' | 'SHA512' | 'MD5' | 'MD2' | 'MD4' | 'GOST12_256' | 'GOST12_512' | 'GOST94_256';
export interface CryptoProSignProviderOptions {
    cpContainerPassword: string;
    cpContainer: string;
    cpHashAlg?: THashAlgorithm;
    cpSingAlg?: TSignAlgorithm;
    cpLocation?: string;
    cpHideExceptions?: boolean;
}
export declare class CryptoProSignProvider extends SignProvider {
    signRequestPayload(payload: PayloadType): PayloadType;
    private options;
    constructor(options: CryptoProSignProviderOptions);
    protected digestLine(line: string): string;
    protected signLine(hash: string): string;
}
export {};
