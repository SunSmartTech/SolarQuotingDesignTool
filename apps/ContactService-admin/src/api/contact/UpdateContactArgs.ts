import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { ContactUpdateInput } from "./ContactUpdateInput";

export type UpdateContactArgs = {
  where: ContactWhereUniqueInput;
  data: ContactUpdateInput;
};
