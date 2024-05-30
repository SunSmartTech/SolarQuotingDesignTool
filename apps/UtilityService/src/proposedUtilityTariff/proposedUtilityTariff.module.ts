import { Module } from "@nestjs/common";
import { ProposedUtilityTariffModuleBase } from "./base/proposedUtilityTariff.module.base";
import { ProposedUtilityTariffService } from "./proposedUtilityTariff.service";
import { ProposedUtilityTariffController } from "./proposedUtilityTariff.controller";
import { ProposedUtilityTariffResolver } from "./proposedUtilityTariff.resolver";

@Module({
  imports: [ProposedUtilityTariffModuleBase],
  controllers: [ProposedUtilityTariffController],
  providers: [ProposedUtilityTariffService, ProposedUtilityTariffResolver],
  exports: [ProposedUtilityTariffService],
})
export class ProposedUtilityTariffModule {}
