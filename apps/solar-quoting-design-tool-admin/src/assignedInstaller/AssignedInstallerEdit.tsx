import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AssignedInstallerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="installer" source="installer" />
      </SimpleForm>
    </Edit>
  );
};
