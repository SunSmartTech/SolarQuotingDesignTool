import { PaymentOption as TPaymentOption } from "../api/paymentOption/PaymentOption";

export const PAYMENTOPTION_TITLE_FIELD = "id";

export const PaymentOptionTitle = (record: TPaymentOption): string => {
  return record.id?.toString() || String(record.id);
};
