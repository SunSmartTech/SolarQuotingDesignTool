import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PricingSchemeService } from "./pricingScheme.service";
import { PricingSchemeControllerBase } from "./base/pricingScheme.controller.base";

@swagger.ApiTags("pricingSchemes")
@common.Controller("pricingSchemes")
export class PricingSchemeController extends PricingSchemeControllerBase {
  constructor(protected readonly service: PricingSchemeService) {
    super(service);
  }
}
