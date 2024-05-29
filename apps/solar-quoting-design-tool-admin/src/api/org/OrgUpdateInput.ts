import { ProjectUpdateManyWithoutOrgsInput } from "./ProjectUpdateManyWithoutOrgsInput";

export type OrgUpdateInput = {
  customerData?: string | null;
  projects?: ProjectUpdateManyWithoutOrgsInput;
};
