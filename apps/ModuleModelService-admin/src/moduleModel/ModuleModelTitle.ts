import { ModuleModel as TModuleModel } from "../api/moduleModel/ModuleModel";

export const MODULEMODEL_TITLE_FIELD = "id";

export const ModuleModelTitle = (record: TModuleModel): string => {
  return record.id?.toString() || String(record.id);
};
