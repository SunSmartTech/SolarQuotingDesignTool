import { BatteryWhereInput } from "./BatteryWhereInput";
import { BatteryOrderByInput } from "./BatteryOrderByInput";

export type BatteryFindManyArgs = {
  where?: BatteryWhereInput;
  orderBy?: Array<BatteryOrderByInput>;
  skip?: number;
  take?: number;
};
