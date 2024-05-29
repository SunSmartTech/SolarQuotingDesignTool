import { PrivateFileWhereInput } from "./PrivateFileWhereInput";
import { PrivateFileOrderByInput } from "./PrivateFileOrderByInput";

export type PrivateFileFindManyArgs = {
  where?: PrivateFileWhereInput;
  orderBy?: Array<PrivateFileOrderByInput>;
  skip?: number;
  take?: number;
};
