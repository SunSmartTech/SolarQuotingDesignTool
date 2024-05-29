import { Module } from "@nestjs/common";
import { AssignedContactModule } from "./assignedContact/assignedContact.module";
import { OrgModule } from "./org/org.module";
import { AssignedSiteInspectorModule } from "./assignedSiteInspector/assignedSiteInspector.module";
import { ProjectModule } from "./project/project.module";
import { SystemModule } from "./system/system.module";
import { AssignedTeamMemberModule } from "./assignedTeamMember/assignedTeamMember.module";
import { AssignedInstallerModule } from "./assignedInstaller/assignedInstaller.module";
import { ProposedUtilityTariffModule } from "./proposedUtilityTariff/proposedUtilityTariff.module";
import { PrivateFileModule } from "./privateFile/privateFile.module";
import { CurrentUtilityTariffModule } from "./currentUtilityTariff/currentUtilityTariff.module";
import { ModuleModelModule } from "./moduleModel/moduleModel.module";
import { BatteryModule } from "./battery/battery.module";
import { UtilityTariffModule } from "./utilityTariff/utilityTariff.module";
import { InverterModule } from "./inverter/inverter.module";
import { EventModule } from "./event/event.module";
import { LeadCaptureFormModule } from "./leadCaptureForm/leadCaptureForm.module";
import { OtherComponentModule } from "./otherComponent/otherComponent.module";
import { DocumentTemplateModule } from "./documentTemplate/documentTemplate.module";
import { PaymentOptionModule } from "./paymentOption/paymentOption.module";
import { PublicFileModule } from "./publicFile/publicFile.module";
import { RoofTypeModule } from "./roofType/roofType.module";
import { IncentiveModule } from "./incentive/incentive.module";
import { PricingSchemeModule } from "./pricingScheme/pricingScheme.module";
import { CostingModule } from "./costing/costing.module";
import { RoleModule } from "./role/role.module";
import { ContactModule } from "./contact/contact.module";
import { OrgSettingModule } from "./orgSetting/orgSetting.module";
import { EventTypeModule } from "./eventType/eventType.module";
import { TeamModule } from "./team/team.module";
import { SetbackModule } from "./setback/setback.module";
import { DesignSettingModule } from "./designSetting/designSetting.module";
import { ComponentActivationModule } from "./componentActivation/componentActivation.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AssignedContactModule,
    OrgModule,
    AssignedSiteInspectorModule,
    ProjectModule,
    SystemModule,
    AssignedTeamMemberModule,
    AssignedInstallerModule,
    ProposedUtilityTariffModule,
    PrivateFileModule,
    CurrentUtilityTariffModule,
    ModuleModelModule,
    BatteryModule,
    UtilityTariffModule,
    InverterModule,
    EventModule,
    LeadCaptureFormModule,
    OtherComponentModule,
    DocumentTemplateModule,
    PaymentOptionModule,
    PublicFileModule,
    RoofTypeModule,
    IncentiveModule,
    PricingSchemeModule,
    CostingModule,
    RoleModule,
    ContactModule,
    OrgSettingModule,
    EventTypeModule,
    TeamModule,
    SetbackModule,
    DesignSettingModule,
    ComponentActivationModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
