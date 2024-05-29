import { AssignedContactCreateNestedManyWithoutContactsInput } from "./AssignedContactCreateNestedManyWithoutContactsInput";

export type ContactCreateInput = {
  assignedContacts?: AssignedContactCreateNestedManyWithoutContactsInput;
};
