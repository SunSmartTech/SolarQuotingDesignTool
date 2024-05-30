import { Role as TRole } from "../api/role/Role";

export const ROLE_TITLE_FIELD = "id";

export const RoleTitle = (record: TRole): string => {
  return record.id?.toString() || String(record.id);
};
