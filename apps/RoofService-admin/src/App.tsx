import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoofTypeList } from "./roofType/RoofTypeList";
import { RoofTypeCreate } from "./roofType/RoofTypeCreate";
import { RoofTypeEdit } from "./roofType/RoofTypeEdit";
import { RoofTypeShow } from "./roofType/RoofTypeShow";
import { SetbackList } from "./setback/SetbackList";
import { SetbackCreate } from "./setback/SetbackCreate";
import { SetbackEdit } from "./setback/SetbackEdit";
import { SetbackShow } from "./setback/SetbackShow";
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
        title={"RoofService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="RoofType"
          list={RoofTypeList}
          edit={RoofTypeEdit}
          create={RoofTypeCreate}
          show={RoofTypeShow}
        />
        <Resource
          name="Setback"
          list={SetbackList}
          edit={SetbackEdit}
          create={SetbackCreate}
          show={SetbackShow}
        />
      </Admin>
    </div>
  );
};

export default App;
