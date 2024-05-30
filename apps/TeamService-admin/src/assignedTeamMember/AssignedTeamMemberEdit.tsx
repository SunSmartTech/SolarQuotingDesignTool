import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AssignedTeamMemberEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="teamMember" source="teamMember" />
      </SimpleForm>
    </Edit>
  );
};
