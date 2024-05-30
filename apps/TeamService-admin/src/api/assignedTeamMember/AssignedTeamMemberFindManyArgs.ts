import { AssignedTeamMemberWhereInput } from "./AssignedTeamMemberWhereInput";
import { AssignedTeamMemberOrderByInput } from "./AssignedTeamMemberOrderByInput";

export type AssignedTeamMemberFindManyArgs = {
  where?: AssignedTeamMemberWhereInput;
  orderBy?: Array<AssignedTeamMemberOrderByInput>;
  skip?: number;
  take?: number;
};
