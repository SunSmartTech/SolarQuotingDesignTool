import { OrgSetting as TOrgSetting } from "../api/orgSetting/OrgSetting";

export const ORGSETTING_TITLE_FIELD = "id";

export const OrgSettingTitle = (record: TOrgSetting): string => {
  return record.id?.toString() || String(record.id);
};
