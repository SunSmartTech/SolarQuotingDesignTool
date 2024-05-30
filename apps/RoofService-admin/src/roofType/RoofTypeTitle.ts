import { RoofType as TRoofType } from "../api/roofType/RoofType";

export const ROOFTYPE_TITLE_FIELD = "id";

export const RoofTypeTitle = (record: TRoofType): string => {
  return record.id?.toString() || String(record.id);
};
