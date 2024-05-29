import { CurrentUtilityTariff as TCurrentUtilityTariff } from "../api/currentUtilityTariff/CurrentUtilityTariff";

export const CURRENTUTILITYTARIFF_TITLE_FIELD = "id";

export const CurrentUtilityTariffTitle = (
  record: TCurrentUtilityTariff
): string => {
  return record.id?.toString() || String(record.id);
};
