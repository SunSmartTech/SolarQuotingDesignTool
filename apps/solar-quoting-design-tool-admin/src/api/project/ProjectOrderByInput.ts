import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  orgId?: SortOrder;
  projectName?: SortOrder;
  updatedAt?: SortOrder;
};
