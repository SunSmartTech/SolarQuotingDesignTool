import { PrivateFile as TPrivateFile } from "../api/privateFile/PrivateFile";

export const PRIVATEFILE_TITLE_FIELD = "id";

export const PrivateFileTitle = (record: TPrivateFile): string => {
  return record.id?.toString() || String(record.id);
};
