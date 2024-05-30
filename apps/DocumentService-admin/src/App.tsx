import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DocumentTemplateList } from "./documentTemplate/DocumentTemplateList";
import { DocumentTemplateCreate } from "./documentTemplate/DocumentTemplateCreate";
import { DocumentTemplateEdit } from "./documentTemplate/DocumentTemplateEdit";
import { DocumentTemplateShow } from "./documentTemplate/DocumentTemplateShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DocumentService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DocumentTemplate"
          list={DocumentTemplateList}
          edit={DocumentTemplateEdit}
          create={DocumentTemplateCreate}
          show={DocumentTemplateShow}
        />
      </Admin>
    </div>
  );
};

export default App;
