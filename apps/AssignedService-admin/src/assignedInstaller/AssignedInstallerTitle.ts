import { AssignedInstaller as TAssignedInstaller } from "../api/assignedInstaller/AssignedInstaller";

export const ASSIGNEDINSTALLER_TITLE_FIELD = "installer";

export const AssignedInstallerTitle = (record: TAssignedInstaller): string => {
  return record.installer?.toString() || String(record.id);
};
