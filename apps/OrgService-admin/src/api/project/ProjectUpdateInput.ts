import { OrgWhereUniqueInput } from "../org/OrgWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  org?: OrgWhereUniqueInput | null;
  projectName?: string | null;
};
