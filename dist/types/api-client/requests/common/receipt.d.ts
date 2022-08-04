import { ICardData } from '../finish-authorize';
export interface Receipt {
    Email?: string;
    Phone?: string;
    EmailCompany?: string;
    Taxation: ReceiptTaxation;
    Items: ReceiptItem[];
}
export interface ReceiptItem {
    Name: string;
    Quantity: number;
    Amount?: number;
    Price: number;
    PaymentMethod?: ReceiptPaymentMethod;
    PaymentObject?: ReceiptPaymentObject;
    Tax: ReceiptTax;
    Ean13?: string;
    ShopCode?: string;
    AgentData?: AgentData;
    SupplierInfo?: SupplierInfo;
}
export declare enum ReceiptPaymentMethod {
    FULL_PAYMENT = "full_payment",
    FULL_PREPAYMENT = "full_prepayment",
    PREPAYMENT = "prepayment",
    ADVANCE = "advance",
    PARTIAL_PAYMENT = "partial_payment",
    CREDIT = "credit",
    CREDIT_PAYMENT = "credit_payment"
}
export declare enum ReceiptPaymentObject {
    COMMODITY = "commodity",
    EXCISE = "excise",
    JOB = "job",
    SERVICE = "service",
    GAMBLING_BET = "gambling_bet",
    GAMBLING_PRIZE = "gambling_prize",
    LOTTERY = "lottery",
    LOTTERY_PRIZE = "lottery_prize",
    INTELLECTUAL_ACTIVITY = "intellectual_activity",
    PAYMENT = "payment",
    COMPOSITE = "composite",
    ANOTHER = "another"
}
export declare enum ReceiptTax {
    NONE = "none",
    VAT0 = "vat0",
    VAT10 = "vat10",
    VAT20 = "vat20",
    VAT110 = "vat110",
    VAT120 = "vat120"
}
export declare enum ReceiptTaxation {
    OSN = "osn",
    USN_INCOME = "usn_income",
    USN_INCOME_OUTCOME = "usn_income_outcome",
    PATENT = "patent",
    ENVD = "envd",
    ESN = "esn"
}
export interface AgentData {
    AgentSign?: AgentDataAgentSign;
    OperationName?: string;
    Phones?: string[];
    ReceiverPhones?: string[];
    TransferPhones?: string[];
    OperatorName?: string;
    OperatorAddress?: string;
    OperatorInn?: string;
}
export declare enum AgentDataAgentSign {
    bank_paying_agent = "bank_paying_agent",
    bank_paying_subagent = "bank_paying_subagent",
    paying_agent = "paying_agent",
    paying_subagent = "paying_subagent",
    attorney = "attorney",
    commission_agent = "commission_agent",
    another = "another"
}
export interface SupplierInfo {
    Phones?: string[];
    Name?: string;
    Inn?: string;
}
export declare function validateAndPrepareCardData(cardData: ICardData): string;
export declare function validateAndPrepareReceipt(receipt: Receipt): Receipt;
