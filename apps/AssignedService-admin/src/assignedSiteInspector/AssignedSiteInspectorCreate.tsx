import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AssignedSiteInspectorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="siteInspector" source="siteInspector" />
      </SimpleForm>
    </Create>
  );
};
