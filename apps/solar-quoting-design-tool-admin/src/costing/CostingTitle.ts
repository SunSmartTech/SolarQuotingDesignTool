import { Costing as TCosting } from "../api/costing/Costing";

export const COSTING_TITLE_FIELD = "id";

export const CostingTitle = (record: TCosting): string => {
  return record.id?.toString() || String(record.id);
};
