import { Project } from "../project/Project";

export type Org = {
  createdAt: Date;
  customerData: string | null;
  id: string;
  projects?: Array<Project>;
  updatedAt: Date;
};
