import { OtherComponent as TOtherComponent } from "../api/otherComponent/OtherComponent";

export const OTHERCOMPONENT_TITLE_FIELD = "id";

export const OtherComponentTitle = (record: TOtherComponent): string => {
  return record.id?.toString() || String(record.id);
};
