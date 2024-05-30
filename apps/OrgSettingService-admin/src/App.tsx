import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrgSettingList } from "./orgSetting/OrgSettingList";
import { OrgSettingCreate } from "./orgSetting/OrgSettingCreate";
import { OrgSettingEdit } from "./orgSetting/OrgSettingEdit";
import { OrgSettingShow } from "./orgSetting/OrgSettingShow";
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
        title={"OrgSettingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="OrgSetting"
          list={OrgSettingList}
          edit={OrgSettingEdit}
          create={OrgSettingCreate}
          show={OrgSettingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
