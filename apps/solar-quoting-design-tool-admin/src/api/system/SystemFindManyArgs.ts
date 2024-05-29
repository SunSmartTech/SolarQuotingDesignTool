import { SystemWhereInput } from "./SystemWhereInput";
import { SystemOrderByInput } from "./SystemOrderByInput";

export type SystemFindManyArgs = {
  where?: SystemWhereInput;
  orderBy?: Array<SystemOrderByInput>;
  skip?: number;
  take?: number;
};
