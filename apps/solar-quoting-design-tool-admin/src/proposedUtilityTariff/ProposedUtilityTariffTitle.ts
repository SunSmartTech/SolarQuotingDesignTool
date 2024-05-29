import { ProposedUtilityTariff as TProposedUtilityTariff } from "../api/proposedUtilityTariff/ProposedUtilityTariff";

export const PROPOSEDUTILITYTARIFF_TITLE_FIELD = "id";

export const ProposedUtilityTariffTitle = (
  record: TProposedUtilityTariff
): string => {
  return record.id?.toString() || String(record.id);
};
