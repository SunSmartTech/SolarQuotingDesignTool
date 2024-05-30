import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DesignSettingList } from "./designSetting/DesignSettingList";
import { DesignSettingCreate } from "./designSetting/DesignSettingCreate";
import { DesignSettingEdit } from "./designSetting/DesignSettingEdit";
import { DesignSettingShow } from "./designSetting/DesignSettingShow";
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
        title={"DesignService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="DesignSetting"
          list={DesignSettingList}
          edit={DesignSettingEdit}
          create={DesignSettingCreate}
          show={DesignSettingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
