import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SystemWhereInput = {
  id?: StringFilter;
  systemSize?: FloatNullableFilter;
  systemType?: StringNullableFilter;
};
