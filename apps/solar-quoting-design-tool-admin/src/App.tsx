import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AssignedContactList } from "./assignedContact/AssignedContactList";
import { AssignedContactCreate } from "./assignedContact/AssignedContactCreate";
import { AssignedContactEdit } from "./assignedContact/AssignedContactEdit";
import { AssignedContactShow } from "./assignedContact/AssignedContactShow";
import { OrgList } from "./org/OrgList";
import { OrgCreate } from "./org/OrgCreate";
import { OrgEdit } from "./org/OrgEdit";
import { OrgShow } from "./org/OrgShow";
import { AssignedSiteInspectorList } from "./assignedSiteInspector/AssignedSiteInspectorList";
import { AssignedSiteInspectorCreate } from "./assignedSiteInspector/AssignedSiteInspectorCreate";
import { AssignedSiteInspectorEdit } from "./assignedSiteInspector/AssignedSiteInspectorEdit";
import { AssignedSiteInspectorShow } from "./assignedSiteInspector/AssignedSiteInspectorShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { SystemList } from "./system/SystemList";
import { SystemCreate } from "./system/SystemCreate";
import { SystemEdit } from "./system/SystemEdit";
import { SystemShow } from "./system/SystemShow";
import { AssignedTeamMemberList } from "./assignedTeamMember/AssignedTeamMemberList";
import { AssignedTeamMemberCreate } from "./assignedTeamMember/AssignedTeamMemberCreate";
import { AssignedTeamMemberEdit } from "./assignedTeamMember/AssignedTeamMemberEdit";
import { AssignedTeamMemberShow } from "./assignedTeamMember/AssignedTeamMemberShow";
import { AssignedInstallerList } from "./assignedInstaller/AssignedInstallerList";
import { AssignedInstallerCreate } from "./assignedInstaller/AssignedInstallerCreate";
import { AssignedInstallerEdit } from "./assignedInstaller/AssignedInstallerEdit";
import { AssignedInstallerShow } from "./assignedInstaller/AssignedInstallerShow";
import { ProposedUtilityTariffList } from "./proposedUtilityTariff/ProposedUtilityTariffList";
import { ProposedUtilityTariffCreate } from "./proposedUtilityTariff/ProposedUtilityTariffCreate";
import { ProposedUtilityTariffEdit } from "./proposedUtilityTariff/ProposedUtilityTariffEdit";
import { ProposedUtilityTariffShow } from "./proposedUtilityTariff/ProposedUtilityTariffShow";
import { PrivateFileList } from "./privateFile/PrivateFileList";
import { PrivateFileCreate } from "./privateFile/PrivateFileCreate";
import { PrivateFileEdit } from "./privateFile/PrivateFileEdit";
import { PrivateFileShow } from "./privateFile/PrivateFileShow";
import { CurrentUtilityTariffList } from "./currentUtilityTariff/CurrentUtilityTariffList";
import { CurrentUtilityTariffCreate } from "./currentUtilityTariff/CurrentUtilityTariffCreate";
import { CurrentUtilityTariffEdit } from "./currentUtilityTariff/CurrentUtilityTariffEdit";
import { CurrentUtilityTariffShow } from "./currentUtilityTariff/CurrentUtilityTariffShow";
import { ModuleModelList } from "./moduleModel/ModuleModelList";
import { ModuleModelCreate } from "./moduleModel/ModuleModelCreate";
import { ModuleModelEdit } from "./moduleModel/ModuleModelEdit";
import { ModuleModelShow } from "./moduleModel/ModuleModelShow";
import { BatteryList } from "./battery/BatteryList";
import { BatteryCreate } from "./battery/BatteryCreate";
import { BatteryEdit } from "./battery/BatteryEdit";
import { BatteryShow } from "./battery/BatteryShow";
import { UtilityTariffList } from "./utilityTariff/UtilityTariffList";
import { UtilityTariffCreate } from "./utilityTariff/UtilityTariffCreate";
import { UtilityTariffEdit } from "./utilityTariff/UtilityTariffEdit";
import { UtilityTariffShow } from "./utilityTariff/UtilityTariffShow";
import { InverterList } from "./inverter/InverterList";
import { InverterCreate } from "./inverter/InverterCreate";
import { InverterEdit } from "./inverter/InverterEdit";
import { InverterShow } from "./inverter/InverterShow";
import { EventList } from "./event/EventList";
import { EventCreate } from "./event/EventCreate";
import { EventEdit } from "./event/EventEdit";
import { EventShow } from "./event/EventShow";
import { LeadCaptureFormList } from "./leadCaptureForm/LeadCaptureFormList";
import { LeadCaptureFormCreate } from "./leadCaptureForm/LeadCaptureFormCreate";
import { LeadCaptureFormEdit } from "./leadCaptureForm/LeadCaptureFormEdit";
import { LeadCaptureFormShow } from "./leadCaptureForm/LeadCaptureFormShow";
import { OtherComponentList } from "./otherComponent/OtherComponentList";
import { OtherComponentCreate } from "./otherComponent/OtherComponentCreate";
import { OtherComponentEdit } from "./otherComponent/OtherComponentEdit";
import { OtherComponentShow } from "./otherComponent/OtherComponentShow";
import { DocumentTemplateList } from "./documentTemplate/DocumentTemplateList";
import { DocumentTemplateCreate } from "./documentTemplate/DocumentTemplateCreate";
import { DocumentTemplateEdit } from "./documentTemplate/DocumentTemplateEdit";
import { DocumentTemplateShow } from "./documentTemplate/DocumentTemplateShow";
import { PaymentOptionList } from "./paymentOption/PaymentOptionList";
import { PaymentOptionCreate } from "./paymentOption/PaymentOptionCreate";
import { PaymentOptionEdit } from "./paymentOption/PaymentOptionEdit";
import { PaymentOptionShow } from "./paymentOption/PaymentOptionShow";
import { PublicFileList } from "./publicFile/PublicFileList";
import { PublicFileCreate } from "./publicFile/PublicFileCreate";
import { PublicFileEdit } from "./publicFile/PublicFileEdit";
import { PublicFileShow } from "./publicFile/PublicFileShow";
import { RoofTypeList } from "./roofType/RoofTypeList";
import { RoofTypeCreate } from "./roofType/RoofTypeCreate";
import { RoofTypeEdit } from "./roofType/RoofTypeEdit";
import { RoofTypeShow } from "./roofType/RoofTypeShow";
import { IncentiveList } from "./incentive/IncentiveList";
import { IncentiveCreate } from "./incentive/IncentiveCreate";
import { IncentiveEdit } from "./incentive/IncentiveEdit";
import { IncentiveShow } from "./incentive/IncentiveShow";
import { PricingSchemeList } from "./pricingScheme/PricingSchemeList";
import { PricingSchemeCreate } from "./pricingScheme/PricingSchemeCreate";
import { PricingSchemeEdit } from "./pricingScheme/PricingSchemeEdit";
import { PricingSchemeShow } from "./pricingScheme/PricingSchemeShow";
import { CostingList } from "./costing/CostingList";
import { CostingCreate } from "./costing/CostingCreate";
import { CostingEdit } from "./costing/CostingEdit";
import { CostingShow } from "./costing/CostingShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { ContactList } from "./contact/ContactList";
import { ContactCreate } from "./contact/ContactCreate";
import { ContactEdit } from "./contact/ContactEdit";
import { ContactShow } from "./contact/ContactShow";
import { OrgSettingList } from "./orgSetting/OrgSettingList";
import { OrgSettingCreate } from "./orgSetting/OrgSettingCreate";
import { OrgSettingEdit } from "./orgSetting/OrgSettingEdit";
import { OrgSettingShow } from "./orgSetting/OrgSettingShow";
import { EventTypeList } from "./eventType/EventTypeList";
import { EventTypeCreate } from "./eventType/EventTypeCreate";
import { EventTypeEdit } from "./eventType/EventTypeEdit";
import { EventTypeShow } from "./eventType/EventTypeShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { SetbackList } from "./setback/SetbackList";
import { SetbackCreate } from "./setback/SetbackCreate";
import { SetbackEdit } from "./setback/SetbackEdit";
import { SetbackShow } from "./setback/SetbackShow";
import { DesignSettingList } from "./designSetting/DesignSettingList";
import { DesignSettingCreate } from "./designSetting/DesignSettingCreate";
import { DesignSettingEdit } from "./designSetting/DesignSettingEdit";
import { DesignSettingShow } from "./designSetting/DesignSettingShow";
import { ComponentActivationList } from "./componentActivation/ComponentActivationList";
import { ComponentActivationCreate } from "./componentActivation/ComponentActivationCreate";
import { ComponentActivationEdit } from "./componentActivation/ComponentActivationEdit";
import { ComponentActivationShow } from "./componentActivation/ComponentActivationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"SolarQuotingDesignTool"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AssignedContact"
          list={AssignedContactList}
          edit={AssignedContactEdit}
          create={AssignedContactCreate}
          show={AssignedContactShow}
        />
        <Resource
          name="Org"
          list={OrgList}
          edit={OrgEdit}
          create={OrgCreate}
          show={OrgShow}
        />
        <Resource
          name="AssignedSiteInspector"
          list={AssignedSiteInspectorList}
          edit={AssignedSiteInspectorEdit}
          create={AssignedSiteInspectorCreate}
          show={AssignedSiteInspectorShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="System"
          list={SystemList}
          edit={SystemEdit}
          create={SystemCreate}
          show={SystemShow}
        />
        <Resource
          name="AssignedTeamMember"
          list={AssignedTeamMemberList}
          edit={AssignedTeamMemberEdit}
          create={AssignedTeamMemberCreate}
          show={AssignedTeamMemberShow}
        />
        <Resource
          name="AssignedInstaller"
          list={AssignedInstallerList}
          edit={AssignedInstallerEdit}
          create={AssignedInstallerCreate}
          show={AssignedInstallerShow}
        />
        <Resource
          name="ProposedUtilityTariff"
          list={ProposedUtilityTariffList}
          edit={ProposedUtilityTariffEdit}
          create={ProposedUtilityTariffCreate}
          show={ProposedUtilityTariffShow}
        />
        <Resource
          name="PrivateFile"
          list={PrivateFileList}
          edit={PrivateFileEdit}
          create={PrivateFileCreate}
          show={PrivateFileShow}
        />
        <Resource
          name="CurrentUtilityTariff"
          list={CurrentUtilityTariffList}
          edit={CurrentUtilityTariffEdit}
          create={CurrentUtilityTariffCreate}
          show={CurrentUtilityTariffShow}
        />
        <Resource
          name="ModuleModel"
          list={ModuleModelList}
          edit={ModuleModelEdit}
          create={ModuleModelCreate}
          show={ModuleModelShow}
        />
        <Resource
          name="Battery"
          list={BatteryList}
          edit={BatteryEdit}
          create={BatteryCreate}
          show={BatteryShow}
        />
        <Resource
          name="UtilityTariff"
          list={UtilityTariffList}
          edit={UtilityTariffEdit}
          create={UtilityTariffCreate}
          show={UtilityTariffShow}
        />
        <Resource
          name="Inverter"
          list={InverterList}
          edit={InverterEdit}
          create={InverterCreate}
          show={InverterShow}
        />
        <Resource
          name="Event"
          list={EventList}
          edit={EventEdit}
          create={EventCreate}
          show={EventShow}
        />
        <Resource
          name="LeadCaptureForm"
          list={LeadCaptureFormList}
          edit={LeadCaptureFormEdit}
          create={LeadCaptureFormCreate}
          show={LeadCaptureFormShow}
        />
        <Resource
          name="OtherComponent"
          list={OtherComponentList}
          edit={OtherComponentEdit}
          create={OtherComponentCreate}
          show={OtherComponentShow}
        />
        <Resource
          name="DocumentTemplate"
          list={DocumentTemplateList}
          edit={DocumentTemplateEdit}
          create={DocumentTemplateCreate}
          show={DocumentTemplateShow}
        />
        <Resource
          name="PaymentOption"
          list={PaymentOptionList}
          edit={PaymentOptionEdit}
          create={PaymentOptionCreate}
          show={PaymentOptionShow}
        />
        <Resource
          name="PublicFile"
          list={PublicFileList}
          edit={PublicFileEdit}
          create={PublicFileCreate}
          show={PublicFileShow}
        />
        <Resource
          name="RoofType"
          list={RoofTypeList}
          edit={RoofTypeEdit}
          create={RoofTypeCreate}
          show={RoofTypeShow}
        />
        <Resource
          name="Incentive"
          list={IncentiveList}
          edit={IncentiveEdit}
          create={IncentiveCreate}
          show={IncentiveShow}
        />
        <Resource
          name="PricingScheme"
          list={PricingSchemeList}
          edit={PricingSchemeEdit}
          create={PricingSchemeCreate}
          show={PricingSchemeShow}
        />
        <Resource
          name="Costing"
          list={CostingList}
          edit={CostingEdit}
          create={CostingCreate}
          show={CostingShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Contact"
          list={ContactList}
          edit={ContactEdit}
          create={ContactCreate}
          show={ContactShow}
        />
        <Resource
          name="OrgSetting"
          list={OrgSettingList}
          edit={OrgSettingEdit}
          create={OrgSettingCreate}
          show={OrgSettingShow}
        />
        <Resource
          name="EventType"
          list={EventTypeList}
          edit={EventTypeEdit}
          create={EventTypeCreate}
          show={EventTypeShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Setback"
          list={SetbackList}
          edit={SetbackEdit}
          create={SetbackCreate}
          show={SetbackShow}
        />
        <Resource
          name="DesignSetting"
          list={DesignSettingList}
          edit={DesignSettingEdit}
          create={DesignSettingCreate}
          show={DesignSettingShow}
        />
        <Resource
          name="ComponentActivation"
          list={ComponentActivationList}
          edit={ComponentActivationEdit}
          create={ComponentActivationCreate}
          show={ComponentActivationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
