import { Incentive as TIncentive } from "../api/incentive/Incentive";

export const INCENTIVE_TITLE_FIELD = "id";

export const IncentiveTitle = (record: TIncentive): string => {
  return record.id?.toString() || String(record.id);
};
