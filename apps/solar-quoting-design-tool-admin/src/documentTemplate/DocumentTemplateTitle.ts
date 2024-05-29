import { DocumentTemplate as TDocumentTemplate } from "../api/documentTemplate/DocumentTemplate";

export const DOCUMENTTEMPLATE_TITLE_FIELD = "id";

export const DocumentTemplateTitle = (record: TDocumentTemplate): string => {
  return record.id?.toString() || String(record.id);
};
