import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UtilityTariffService } from "./utilityTariff.service";
import { UtilityTariffGrpcControllerBase } from "./base/utilityTariff.grpc.controller.base";

@swagger.ApiTags("utilityTariffs")
@common.Controller("utilityTariffs")
export class UtilityTariffGrpcController extends UtilityTariffGrpcControllerBase {
  constructor(protected readonly service: UtilityTariffService) {
    super(service);
  }
}
