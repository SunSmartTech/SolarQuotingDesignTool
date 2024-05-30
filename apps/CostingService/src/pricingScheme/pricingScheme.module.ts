import { Module } from "@nestjs/common";
import { PricingSchemeModuleBase } from "./base/pricingScheme.module.base";
import { PricingSchemeService } from "./pricingScheme.service";
import { PricingSchemeController } from "./pricingScheme.controller";
import { PricingSchemeResolver } from "./pricingScheme.resolver";

@Module({
  imports: [PricingSchemeModuleBase],
  controllers: [PricingSchemeController],
  providers: [PricingSchemeService, PricingSchemeResolver],
  exports: [PricingSchemeService],
})
export class PricingSchemeModule {}
