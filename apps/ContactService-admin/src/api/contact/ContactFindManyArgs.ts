import { ContactWhereInput } from "./ContactWhereInput";
import { ContactOrderByInput } from "./ContactOrderByInput";

export type ContactFindManyArgs = {
  where?: ContactWhereInput;
  orderBy?: Array<ContactOrderByInput>;
  skip?: number;
  take?: number;
};
