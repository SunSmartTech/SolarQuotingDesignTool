import { Contact } from "../contact/Contact";

export type AssignedContact = {
  contact?: Contact | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
