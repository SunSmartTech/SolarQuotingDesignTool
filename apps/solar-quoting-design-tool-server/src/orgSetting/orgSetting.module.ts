import { Module } from "@nestjs/common";
import { OrgSettingModuleBase } from "./base/orgSetting.module.base";
import { OrgSettingService } from "./orgSetting.service";
import { OrgSettingController } from "./orgSetting.controller";
import { OrgSettingResolver } from "./orgSetting.resolver";

@Module({
  imports: [OrgSettingModuleBase],
  controllers: [OrgSettingController],
  providers: [OrgSettingService, OrgSettingResolver],
  exports: [OrgSettingService],
})
export class OrgSettingModule {}
