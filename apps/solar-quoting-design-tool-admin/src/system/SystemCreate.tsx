import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SystemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="systemSize" source="systemSize" />
        <TextInput label="systemType" source="systemType" />
      </SimpleForm>
    </Create>
  );
};
