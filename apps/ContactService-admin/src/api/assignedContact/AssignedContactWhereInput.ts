import { ContactWhereUniqueInput } from "../contact/ContactWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AssignedContactWhereInput = {
  contact?: ContactWhereUniqueInput;
  id?: StringFilter;
};
