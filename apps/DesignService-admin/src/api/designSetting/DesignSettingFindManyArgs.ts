import { DesignSettingWhereInput } from "./DesignSettingWhereInput";
import { DesignSettingOrderByInput } from "./DesignSettingOrderByInput";

export type DesignSettingFindManyArgs = {
  where?: DesignSettingWhereInput;
  orderBy?: Array<DesignSettingOrderByInput>;
  skip?: number;
  take?: number;
};
