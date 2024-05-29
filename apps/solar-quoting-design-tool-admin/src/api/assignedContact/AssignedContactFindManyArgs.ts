import { AssignedContactWhereInput } from "./AssignedContactWhereInput";
import { AssignedContactOrderByInput } from "./AssignedContactOrderByInput";

export type AssignedContactFindManyArgs = {
  where?: AssignedContactWhereInput;
  orderBy?: Array<AssignedContactOrderByInput>;
  skip?: number;
  take?: number;
};
