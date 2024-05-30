import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PricingSchemeService } from "./pricingScheme.service";
import { PricingSchemeGrpcControllerBase } from "./base/pricingScheme.grpc.controller.base";

@swagger.ApiTags("pricingSchemes")
@common.Controller("pricingSchemes")
export class PricingSchemeGrpcController extends PricingSchemeGrpcControllerBase {
  constructor(protected readonly service: PricingSchemeService) {
    super(service);
  }
}
