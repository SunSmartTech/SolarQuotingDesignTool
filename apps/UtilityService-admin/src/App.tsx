import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CurrentUtilityTariffList } from "./currentUtilityTariff/CurrentUtilityTariffList";
import { CurrentUtilityTariffCreate } from "./currentUtilityTariff/CurrentUtilityTariffCreate";
import { CurrentUtilityTariffEdit } from "./currentUtilityTariff/CurrentUtilityTariffEdit";
import { CurrentUtilityTariffShow } from "./currentUtilityTariff/CurrentUtilityTariffShow";
import { ProposedUtilityTariffList } from "./proposedUtilityTariff/ProposedUtilityTariffList";
import { ProposedUtilityTariffCreate } from "./proposedUtilityTariff/ProposedUtilityTariffCreate";
import { ProposedUtilityTariffEdit } from "./proposedUtilityTariff/ProposedUtilityTariffEdit";
import { ProposedUtilityTariffShow } from "./proposedUtilityTariff/ProposedUtilityTariffShow";
import { UtilityTariffList } from "./utilityTariff/UtilityTariffList";
import { UtilityTariffCreate } from "./utilityTariff/UtilityTariffCreate";
import { UtilityTariffEdit } from "./utilityTariff/UtilityTariffEdit";
import { UtilityTariffShow } from "./utilityTariff/UtilityTariffShow";
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
        title={"UtilityService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CurrentUtilityTariff"
          list={CurrentUtilityTariffList}
          edit={CurrentUtilityTariffEdit}
          create={CurrentUtilityTariffCreate}
          show={CurrentUtilityTariffShow}
        />
        <Resource
          name="ProposedUtilityTariff"
          list={ProposedUtilityTariffList}
          edit={ProposedUtilityTariffEdit}
          create={ProposedUtilityTariffCreate}
          show={ProposedUtilityTariffShow}
        />
        <Resource
          name="UtilityTariff"
          list={UtilityTariffList}
          edit={UtilityTariffEdit}
          create={UtilityTariffCreate}
          show={UtilityTariffShow}
        />
      </Admin>
    </div>
  );
};

export default App;
