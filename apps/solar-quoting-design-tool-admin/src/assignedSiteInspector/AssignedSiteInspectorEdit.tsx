import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AssignedSiteInspectorEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="siteInspector" source="siteInspector" />
      </SimpleForm>
    </Edit>
  );
};
