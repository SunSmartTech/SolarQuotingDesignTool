import { Module } from "@nestjs/common";
import { OrgModuleBase } from "./base/org.module.base";
import { OrgService } from "./org.service";
import { OrgController } from "./org.controller";
import { OrgResolver } from "./org.resolver";

@Module({
  imports: [OrgModuleBase],
  controllers: [OrgController],
  providers: [OrgService, OrgResolver],
  exports: [OrgService],
})
export class OrgModule {}
