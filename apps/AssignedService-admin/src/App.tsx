import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AssignedInstallerList } from "./assignedInstaller/AssignedInstallerList";
import { AssignedInstallerCreate } from "./assignedInstaller/AssignedInstallerCreate";
import { AssignedInstallerEdit } from "./assignedInstaller/AssignedInstallerEdit";
import { AssignedInstallerShow } from "./assignedInstaller/AssignedInstallerShow";
import { AssignedSiteInspectorList } from "./assignedSiteInspector/AssignedSiteInspectorList";
import { AssignedSiteInspectorCreate } from "./assignedSiteInspector/AssignedSiteInspectorCreate";
import { AssignedSiteInspectorEdit } from "./assignedSiteInspector/AssignedSiteInspectorEdit";
import { AssignedSiteInspectorShow } from "./assignedSiteInspector/AssignedSiteInspectorShow";
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
        title={"AssignedService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AssignedInstaller"
          list={AssignedInstallerList}
          edit={AssignedInstallerEdit}
          create={AssignedInstallerCreate}
          show={AssignedInstallerShow}
        />
        <Resource
          name="AssignedSiteInspector"
          list={AssignedSiteInspectorList}
          edit={AssignedSiteInspectorEdit}
          create={AssignedSiteInspectorCreate}
          show={AssignedSiteInspectorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
