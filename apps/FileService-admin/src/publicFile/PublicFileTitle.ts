import { PublicFile as TPublicFile } from "../api/publicFile/PublicFile";

export const PUBLICFILE_TITLE_FIELD = "id";

export const PublicFileTitle = (record: TPublicFile): string => {
  return record.id?.toString() || String(record.id);
};
