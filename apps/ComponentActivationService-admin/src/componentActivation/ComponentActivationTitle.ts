import { ComponentActivation as TComponentActivation } from "../api/componentActivation/ComponentActivation";

export const COMPONENTACTIVATION_TITLE_FIELD = "id";

export const ComponentActivationTitle = (
  record: TComponentActivation
): string => {
  return record.id?.toString() || String(record.id);
};
