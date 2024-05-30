import { ContactWhereInput } from "./ContactWhereInput";

export type ContactListRelationFilter = {
  every?: ContactWhereInput;
  some?: ContactWhereInput;
  none?: ContactWhereInput;
};
