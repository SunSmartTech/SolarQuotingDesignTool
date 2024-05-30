import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { AssignedTeamMemberList } from "./assignedTeamMember/AssignedTeamMemberList";
import { AssignedTeamMemberCreate } from "./assignedTeamMember/AssignedTeamMemberCreate";
import { AssignedTeamMemberEdit } from "./assignedTeamMember/AssignedTeamMemberEdit";
import { AssignedTeamMemberShow } from "./assignedTeamMember/AssignedTeamMemberShow";
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
        title={"TeamService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="AssignedTeamMember"
          list={AssignedTeamMemberList}
          edit={AssignedTeamMemberEdit}
          create={AssignedTeamMemberCreate}
          show={AssignedTeamMemberShow}
        />
      </Admin>
    </div>
  );
};

export default App;
