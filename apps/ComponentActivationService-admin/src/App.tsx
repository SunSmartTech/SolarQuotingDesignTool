import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ComponentActivationList } from "./componentActivation/ComponentActivationList";
import { ComponentActivationCreate } from "./componentActivation/ComponentActivationCreate";
import { ComponentActivationEdit } from "./componentActivation/ComponentActivationEdit";
import { ComponentActivationShow } from "./componentActivation/ComponentActivationShow";
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
        title={"ComponentActivationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ComponentActivation"
          list={ComponentActivationList}
          edit={ComponentActivationEdit}
          create={ComponentActivationCreate}
          show={ComponentActivationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
