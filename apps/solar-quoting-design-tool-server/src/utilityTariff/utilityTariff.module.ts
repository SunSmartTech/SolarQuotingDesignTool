import { Module } from "@nestjs/common";
import { UtilityTariffModuleBase } from "./base/utilityTariff.module.base";
import { UtilityTariffService } from "./utilityTariff.service";
import { UtilityTariffController } from "./utilityTariff.controller";
import { UtilityTariffResolver } from "./utilityTariff.resolver";

@Module({
  imports: [UtilityTariffModuleBase],
  controllers: [UtilityTariffController],
  providers: [UtilityTariffService, UtilityTariffResolver],
  exports: [UtilityTariffService],
})
export class UtilityTariffModule {}
