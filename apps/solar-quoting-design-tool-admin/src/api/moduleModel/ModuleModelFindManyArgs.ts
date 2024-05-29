import { ModuleModelWhereInput } from "./ModuleModelWhereInput";
import { ModuleModelOrderByInput } from "./ModuleModelOrderByInput";

export type ModuleModelFindManyArgs = {
  where?: ModuleModelWhereInput;
  orderBy?: Array<ModuleModelOrderByInput>;
  skip?: number;
  take?: number;
};
