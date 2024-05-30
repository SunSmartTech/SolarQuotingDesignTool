import { TeamWhereInput } from "./TeamWhereInput";
import { TeamOrderByInput } from "./TeamOrderByInput";

export type TeamFindManyArgs = {
  where?: TeamWhereInput;
  orderBy?: Array<TeamOrderByInput>;
  skip?: number;
  take?: number;
};
