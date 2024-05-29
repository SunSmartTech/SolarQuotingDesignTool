import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrgTitle } from "../org/OrgTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="org.id" reference="Org" label="org">
          <SelectInput optionText={OrgTitle} />
        </ReferenceInput>
        <TextInput label="projectName" source="projectName" />
      </SimpleForm>
    </Create>
  );
};
