import { ProjectCreateNestedManyWithoutOrgsInput } from "./ProjectCreateNestedManyWithoutOrgsInput";

export type OrgCreateInput = {
  customerData?: string | null;
  projects?: ProjectCreateNestedManyWithoutOrgsInput;
};
