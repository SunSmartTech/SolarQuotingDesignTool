import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AssignedInstallerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="installer" source="installer" />
      </SimpleForm>
    </Create>
  );
};
