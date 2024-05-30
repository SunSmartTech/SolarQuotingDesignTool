import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type OrgWhereInput = {
  customerData?: StringNullableFilter;
  id?: StringFilter;
  projects?: ProjectListRelationFilter;
};
