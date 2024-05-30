import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LeadCaptureFormList } from "./leadCaptureForm/LeadCaptureFormList";
import { LeadCaptureFormCreate } from "./leadCaptureForm/LeadCaptureFormCreate";
import { LeadCaptureFormEdit } from "./leadCaptureForm/LeadCaptureFormEdit";
import { LeadCaptureFormShow } from "./leadCaptureForm/LeadCaptureFormShow";
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
        title={"LeadService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="LeadCaptureForm"
          list={LeadCaptureFormList}
          edit={LeadCaptureFormEdit}
          create={LeadCaptureFormCreate}
          show={LeadCaptureFormShow}
        />
      </Admin>
    </div>
  );
};

export default App;
