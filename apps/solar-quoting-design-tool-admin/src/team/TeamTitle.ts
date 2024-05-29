import { Team as TTeam } from "../api/team/Team";

export const TEAM_TITLE_FIELD = "id";

export const TeamTitle = (record: TTeam): string => {
  return record.id?.toString() || String(record.id);
};
