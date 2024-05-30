import { AssignedContactListRelationFilter } from "../assignedContact/AssignedContactListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  assignedContacts?: AssignedContactListRelationFilter;
  id?: StringFilter;
};
