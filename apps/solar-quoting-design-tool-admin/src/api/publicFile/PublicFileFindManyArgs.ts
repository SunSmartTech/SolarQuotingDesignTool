import { PublicFileWhereInput } from "./PublicFileWhereInput";
import { PublicFileOrderByInput } from "./PublicFileOrderByInput";

export type PublicFileFindManyArgs = {
  where?: PublicFileWhereInput;
  orderBy?: Array<PublicFileOrderByInput>;
  skip?: number;
  take?: number;
};
