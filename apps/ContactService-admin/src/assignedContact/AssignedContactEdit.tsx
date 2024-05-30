import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContactTitle } from "../contact/ContactTitle";

export const AssignedContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="contact.id" reference="Contact" label="contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
