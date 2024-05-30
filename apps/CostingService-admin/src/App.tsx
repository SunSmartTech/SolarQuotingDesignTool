import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CostingList } from "./costing/CostingList";
import { CostingCreate } from "./costing/CostingCreate";
import { CostingEdit } from "./costing/CostingEdit";
import { CostingShow } from "./costing/CostingShow";
import { PricingSchemeList } from "./pricingScheme/PricingSchemeList";
import { PricingSchemeCreate } from "./pricingScheme/PricingSchemeCreate";
import { PricingSchemeEdit } from "./pricingScheme/PricingSchemeEdit";
import { PricingSchemeShow } from "./pricingScheme/PricingSchemeShow";
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
        title={"CostingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Costing"
          list={CostingList}
          edit={CostingEdit}
          create={CostingCreate}
          show={CostingShow}
        />
        <Resource
          name="PricingScheme"
          list={PricingSchemeList}
          edit={PricingSchemeEdit}
          create={PricingSchemeCreate}
          show={PricingSchemeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
