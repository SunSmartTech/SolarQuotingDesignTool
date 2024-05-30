import { AssignedContact } from "../assignedContact/AssignedContact";

export type Contact = {
  assignedContacts?: Array<AssignedContact>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
