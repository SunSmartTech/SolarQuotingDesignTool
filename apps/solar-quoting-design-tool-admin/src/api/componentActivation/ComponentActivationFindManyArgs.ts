import { ComponentActivationWhereInput } from "./ComponentActivationWhereInput";
import { ComponentActivationOrderByInput } from "./ComponentActivationOrderByInput";

export type ComponentActivationFindManyArgs = {
  where?: ComponentActivationWhereInput;
  orderBy?: Array<ComponentActivationOrderByInput>;
  skip?: number;
  take?: number;
};
