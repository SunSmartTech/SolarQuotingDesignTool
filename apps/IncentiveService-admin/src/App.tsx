import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { IncentiveList } from "./incentive/IncentiveList";
import { IncentiveCreate } from "./incentive/IncentiveCreate";
import { IncentiveEdit } from "./incentive/IncentiveEdit";
import { IncentiveShow } from "./incentive/IncentiveShow";
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
        title={"IncentiveService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Incentive"
          list={IncentiveList}
          edit={IncentiveEdit}
          create={IncentiveCreate}
          show={IncentiveShow}
        />
      </Admin>
    </div>
  );
};

export default App;
