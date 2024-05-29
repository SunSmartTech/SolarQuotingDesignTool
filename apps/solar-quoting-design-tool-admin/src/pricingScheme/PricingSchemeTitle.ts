import { PricingScheme as TPricingScheme } from "../api/pricingScheme/PricingScheme";

export const PRICINGSCHEME_TITLE_FIELD = "id";

export const PricingSchemeTitle = (record: TPricingScheme): string => {
  return record.id?.toString() || String(record.id);
};
