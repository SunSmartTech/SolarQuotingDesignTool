import { OrgWhereUniqueInput } from "../org/OrgWhereUniqueInput";

export type ProjectCreateInput = {
  description?: string | null;
  org?: OrgWhereUniqueInput | null;
  projectName?: string | null;
};
