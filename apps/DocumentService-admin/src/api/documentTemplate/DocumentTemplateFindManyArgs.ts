import { DocumentTemplateWhereInput } from "./DocumentTemplateWhereInput";
import { DocumentTemplateOrderByInput } from "./DocumentTemplateOrderByInput";

export type DocumentTemplateFindManyArgs = {
  where?: DocumentTemplateWhereInput;
  orderBy?: Array<DocumentTemplateOrderByInput>;
  skip?: number;
  take?: number;
};
