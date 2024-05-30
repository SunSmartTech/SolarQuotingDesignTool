import { PricingSchemeWhereInput } from "./PricingSchemeWhereInput";
import { PricingSchemeOrderByInput } from "./PricingSchemeOrderByInput";

export type PricingSchemeFindManyArgs = {
  where?: PricingSchemeWhereInput;
  orderBy?: Array<PricingSchemeOrderByInput>;
  skip?: number;
  take?: number;
};
