import { AssignedTeamMember as TAssignedTeamMember } from "../api/assignedTeamMember/AssignedTeamMember";

export const ASSIGNEDTEAMMEMBER_TITLE_FIELD = "teamMember";

export const AssignedTeamMemberTitle = (
  record: TAssignedTeamMember
): string => {
  return record.teamMember?.toString() || String(record.id);
};
