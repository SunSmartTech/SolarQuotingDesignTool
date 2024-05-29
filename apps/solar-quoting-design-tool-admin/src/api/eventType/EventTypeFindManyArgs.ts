import { EventTypeWhereInput } from "./EventTypeWhereInput";
import { EventTypeOrderByInput } from "./EventTypeOrderByInput";

export type EventTypeFindManyArgs = {
  where?: EventTypeWhereInput;
  orderBy?: Array<EventTypeOrderByInput>;
  skip?: number;
  take?: number;
};
