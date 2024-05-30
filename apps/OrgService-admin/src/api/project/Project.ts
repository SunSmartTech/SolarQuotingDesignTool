import { Org } from "../org/Org";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  org?: Org | null;
  projectName: string | null;
  updatedAt: Date;
};
