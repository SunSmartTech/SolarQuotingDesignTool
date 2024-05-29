import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SystemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="systemSize" source="systemSize" />
        <TextInput label="systemType" source="systemType" />
      </SimpleForm>
    </Edit>
  );
};
