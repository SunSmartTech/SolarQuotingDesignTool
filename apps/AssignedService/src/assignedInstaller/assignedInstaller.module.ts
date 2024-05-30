import { Module } from "@nestjs/common";
import { AssignedInstallerModuleBase } from "./base/assignedInstaller.module.base";
import { AssignedInstallerService } from "./assignedInstaller.service";
import { AssignedInstallerController } from "./assignedInstaller.controller";
import { AssignedInstallerResolver } from "./assignedInstaller.resolver";

@Module({
  imports: [AssignedInstallerModuleBase],
  controllers: [AssignedInstallerController],
  providers: [AssignedInstallerService, AssignedInstallerResolver],
  exports: [AssignedInstallerService],
})
export class AssignedInstallerModule {}
