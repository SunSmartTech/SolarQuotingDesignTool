import { Inverter as TInverter } from "../api/inverter/Inverter";

export const INVERTER_TITLE_FIELD = "id";

export const InverterTitle = (record: TInverter): string => {
  return record.id?.toString() || String(record.id);
};
