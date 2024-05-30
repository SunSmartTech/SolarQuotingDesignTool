import { Module } from "@nestjs/common";
import { BatteryModuleBase } from "./base/battery.module.base";
import { BatteryService } from "./battery.service";
import { BatteryController } from "./battery.controller";
import { BatteryResolver } from "./battery.resolver";

@Module({
  imports: [BatteryModuleBase],
  controllers: [BatteryController],
  providers: [BatteryService, BatteryResolver],
  exports: [BatteryService],
})
export class BatteryModule {}
