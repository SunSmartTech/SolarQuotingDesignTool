import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrgWhereUniqueInput } from "../org/OrgWhereUniqueInput";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  org?: OrgWhereUniqueInput;
  projectName?: StringNullableFilter;
};
