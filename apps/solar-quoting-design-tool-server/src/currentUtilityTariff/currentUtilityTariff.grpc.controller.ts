import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CurrentUtilityTariffService } from "./currentUtilityTariff.service";
import { CurrentUtilityTariffGrpcControllerBase } from "./base/currentUtilityTariff.grpc.controller.base";

@swagger.ApiTags("currentUtilityTariffs")
@common.Controller("currentUtilityTariffs")
export class CurrentUtilityTariffGrpcController extends CurrentUtilityTariffGrpcControllerBase {
  constructor(protected readonly service: CurrentUtilityTariffService) {
    super(service);
  }
}
