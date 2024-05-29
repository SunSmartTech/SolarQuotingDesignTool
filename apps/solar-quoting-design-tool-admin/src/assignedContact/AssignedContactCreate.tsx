import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ContactTitle } from "../contact/ContactTitle";

export const AssignedContactCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="contact.id" reference="Contact" label="contact">
          <SelectInput optionText={ContactTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
