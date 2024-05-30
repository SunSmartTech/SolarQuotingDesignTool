import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AssignedTeamMemberCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="teamMember" source="teamMember" />
      </SimpleForm>
    </Create>
  );
};
