import { PaymentStatus } from '../common/payment-status';
import { Schema } from '../serialization/schema';
export interface WebhookPayload {
    TerminalKey: string;
    OrderId: string;
    Success: boolean;
    Status: PaymentStatus;
    PaymentId: number;
    ErrorCode: string;
    Amount: number;
    Rebilld?: number;
    CardId: number;
    Pan: string;
    ExpDate: string;
    Token: string;
    DATA?: string;
}
export declare const webhookPayloadSchema: Schema;
