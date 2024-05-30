import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { ORG_TITLE_FIELD } from "../org/OrgTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="org" source="org.id" reference="Org">
          <TextField source={ORG_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="projectName" source="projectName" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
