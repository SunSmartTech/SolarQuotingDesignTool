import { Org as TOrg } from "../api/org/Org";

export const ORG_TITLE_FIELD = "customerData";

export const OrgTitle = (record: TOrg): string => {
  return record.customerData?.toString() || String(record.id);
};
