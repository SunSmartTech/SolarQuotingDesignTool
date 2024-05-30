import { PaymentOptionWhereInput } from "./PaymentOptionWhereInput";
import { PaymentOptionOrderByInput } from "./PaymentOptionOrderByInput";

export type PaymentOptionFindManyArgs = {
  where?: PaymentOptionWhereInput;
  orderBy?: Array<PaymentOptionOrderByInput>;
  skip?: number;
  take?: number;
};
