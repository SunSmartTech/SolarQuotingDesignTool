import { LeadCaptureForm as TLeadCaptureForm } from "../api/leadCaptureForm/LeadCaptureForm";

export const LEADCAPTUREFORM_TITLE_FIELD = "id";

export const LeadCaptureFormTitle = (record: TLeadCaptureForm): string => {
  return record.id?.toString() || String(record.id);
};
