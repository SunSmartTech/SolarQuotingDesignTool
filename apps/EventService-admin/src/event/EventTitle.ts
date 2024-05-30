import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "id";

export const EventTitle = (record: TEvent): string => {
  return record.id?.toString() || String(record.id);
};
