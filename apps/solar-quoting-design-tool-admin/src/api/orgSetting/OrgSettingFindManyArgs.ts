import { OrgSettingWhereInput } from "./OrgSettingWhereInput";
import { OrgSettingOrderByInput } from "./OrgSettingOrderByInput";

export type OrgSettingFindManyArgs = {
  where?: OrgSettingWhereInput;
  orderBy?: Array<OrgSettingOrderByInput>;
  skip?: number;
  take?: number;
};
