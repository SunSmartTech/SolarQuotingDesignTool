import { OrgWhereInput } from "./OrgWhereInput";
import { OrgOrderByInput } from "./OrgOrderByInput";

export type OrgFindManyArgs = {
  where?: OrgWhereInput;
  orderBy?: Array<OrgOrderByInput>;
  skip?: number;
  take?: number;
};
