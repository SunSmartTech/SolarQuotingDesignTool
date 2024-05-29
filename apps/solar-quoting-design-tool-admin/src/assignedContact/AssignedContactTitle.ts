import { AssignedContact as TAssignedContact } from "../api/assignedContact/AssignedContact";

export const ASSIGNEDCONTACT_TITLE_FIELD = "id";

export const AssignedContactTitle = (record: TAssignedContact): string => {
  return record.id?.toString() || String(record.id);
};
