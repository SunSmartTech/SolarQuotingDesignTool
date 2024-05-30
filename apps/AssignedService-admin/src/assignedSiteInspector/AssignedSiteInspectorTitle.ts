import { AssignedSiteInspector as TAssignedSiteInspector } from "../api/assignedSiteInspector/AssignedSiteInspector";

export const ASSIGNEDSITEINSPECTOR_TITLE_FIELD = "siteInspector";

export const AssignedSiteInspectorTitle = (
  record: TAssignedSiteInspector
): string => {
  return record.siteInspector?.toString() || String(record.id);
};
