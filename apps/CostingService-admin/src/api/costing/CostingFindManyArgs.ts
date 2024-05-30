import { CostingWhereInput } from "./CostingWhereInput";
import { CostingOrderByInput } from "./CostingOrderByInput";

export type CostingFindManyArgs = {
  where?: CostingWhereInput;
  orderBy?: Array<CostingOrderByInput>;
  skip?: number;
  take?: number;
};
