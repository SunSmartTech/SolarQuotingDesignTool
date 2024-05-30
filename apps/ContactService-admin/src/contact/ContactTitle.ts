import { Contact as TContact } from "../api/contact/Contact";

export const CONTACT_TITLE_FIELD = "id";

export const ContactTitle = (record: TContact): string => {
  return record.id?.toString() || String(record.id);
};
