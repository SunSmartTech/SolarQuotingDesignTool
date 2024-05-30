import { Module } from "@nestjs/common";
import { RoleModuleBase } from "./base/role.module.base";
import { RoleService } from "./role.service";
import { RoleController } from "./role.controller";
import { RoleResolver } from "./role.resolver";

@Module({
  imports: [RoleModuleBase],
  controllers: [RoleController],
  providers: [RoleService, RoleResolver],
  exports: [RoleService],
})
export class RoleModule {}
