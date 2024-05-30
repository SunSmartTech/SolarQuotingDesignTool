import { Battery as TBattery } from "../api/battery/Battery";

export const BATTERY_TITLE_FIELD = "id";

export const BatteryTitle = (record: TBattery): string => {
  return record.id?.toString() || String(record.id);
};
