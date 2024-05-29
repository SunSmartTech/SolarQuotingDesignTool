import { Setback as TSetback } from "../api/setback/Setback";

export const SETBACK_TITLE_FIELD = "id";

export const SetbackTitle = (record: TSetback): string => {
  return record.id?.toString() || String(record.id);
};
