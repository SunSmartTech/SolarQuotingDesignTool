import { Module } from "@nestjs/common";
import { AssignedSiteInspectorModuleBase } from "./base/assignedSiteInspector.module.base";
import { AssignedSiteInspectorService } from "./assignedSiteInspector.service";
import { AssignedSiteInspectorController } from "./assignedSiteInspector.controller";
import { AssignedSiteInspectorResolver } from "./assignedSiteInspector.resolver";

@Module({
  imports: [AssignedSiteInspectorModuleBase],
  controllers: [AssignedSiteInspectorController],
  providers: [AssignedSiteInspectorService, AssignedSiteInspectorResolver],
  exports: [AssignedSiteInspectorService],
})
export class AssignedSiteInspectorModule {}
