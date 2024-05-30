import { DesignSetting as TDesignSetting } from "../api/designSetting/DesignSetting";

export const DESIGNSETTING_TITLE_FIELD = "id";

export const DesignSettingTitle = (record: TDesignSetting): string => {
  return record.id?.toString() || String(record.id);
};
