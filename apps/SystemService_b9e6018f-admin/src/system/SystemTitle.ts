import { System as TSystem } from "../api/system/System";

export const SYSTEM_TITLE_FIELD = "systemType";

export const SystemTitle = (record: TSystem): string => {
  return record.systemType?.toString() || String(record.id);
};
