import { Module } from "@nestjs/common";
import { DesignSettingModuleBase } from "./base/designSetting.module.base";
import { DesignSettingService } from "./designSetting.service";
import { DesignSettingController } from "./designSetting.controller";
import { DesignSettingResolver } from "./designSetting.resolver";

@Module({
  imports: [DesignSettingModuleBase],
  controllers: [DesignSettingController],
  providers: [DesignSettingService, DesignSettingResolver],
  exports: [DesignSettingService],
})
export class DesignSettingModule {}
