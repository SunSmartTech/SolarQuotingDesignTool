import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PublicFileList } from "./publicFile/PublicFileList";
import { PublicFileCreate } from "./publicFile/PublicFileCreate";
import { PublicFileEdit } from "./publicFile/PublicFileEdit";
import { PublicFileShow } from "./publicFile/PublicFileShow";
import { PrivateFileList } from "./privateFile/PrivateFileList";
import { PrivateFileCreate } from "./privateFile/PrivateFileCreate";
import { PrivateFileEdit } from "./privateFile/PrivateFileEdit";
import { PrivateFileShow } from "./privateFile/PrivateFileShow";
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
        title={"FileService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PublicFile"
          list={PublicFileList}
          edit={PublicFileEdit}
          create={PublicFileCreate}
          show={PublicFileShow}
        />
        <Resource
          name="PrivateFile"
          list={PrivateFileList}
          edit={PrivateFileEdit}
          create={PrivateFileCreate}
          show={PrivateFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
