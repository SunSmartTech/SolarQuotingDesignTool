import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { AssignedContactTitle } from "../assignedContact/AssignedContactTitle";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="assignedContacts"
          reference="AssignedContact"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssignedContactTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
