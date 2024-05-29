import { Module } from "@nestjs/common";
import { CurrentUtilityTariffModuleBase } from "./base/currentUtilityTariff.module.base";
import { CurrentUtilityTariffService } from "./currentUtilityTariff.service";
import { CurrentUtilityTariffController } from "./currentUtilityTariff.controller";
import { CurrentUtilityTariffResolver } from "./currentUtilityTariff.resolver";

@Module({
  imports: [CurrentUtilityTariffModuleBase],
  controllers: [CurrentUtilityTariffController],
  providers: [CurrentUtilityTariffService, CurrentUtilityTariffResolver],
  exports: [CurrentUtilityTariffService],
})
export class CurrentUtilityTariffModule {}
