import { UtilityTariff as TUtilityTariff } from "../api/utilityTariff/UtilityTariff";

export const UTILITYTARIFF_TITLE_FIELD = "id";

export const UtilityTariffTitle = (record: TUtilityTariff): string => {
  return record.id?.toString() || String(record.id);
};
