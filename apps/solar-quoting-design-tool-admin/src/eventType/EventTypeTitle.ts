import { EventType as TEventType } from "../api/eventType/EventType";

export const EVENTTYPE_TITLE_FIELD = "id";

export const EventTypeTitle = (record: TEventType): string => {
  return record.id?.toString() || String(record.id);
};
