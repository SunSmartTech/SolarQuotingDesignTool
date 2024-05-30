import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrgTitle } from "../org/OrgTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="org.id" reference="Org" label="org">
          <SelectInput optionText={OrgTitle} />
        </ReferenceInput>
        <TextInput label="projectName" source="projectName" />
      </SimpleForm>
    </Edit>
  );
};
