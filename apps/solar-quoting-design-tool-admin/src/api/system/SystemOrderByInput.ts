import { SortOrder } from "../../util/SortOrder";

export type SystemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  systemSize?: SortOrder;
  systemType?: SortOrder;
  updatedAt?: SortOrder;
};
