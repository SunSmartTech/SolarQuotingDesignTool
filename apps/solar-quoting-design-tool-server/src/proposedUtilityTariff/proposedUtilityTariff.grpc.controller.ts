import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProposedUtilityTariffService } from "./proposedUtilityTariff.service";
import { ProposedUtilityTariffGrpcControllerBase } from "./base/proposedUtilityTariff.grpc.controller.base";

@swagger.ApiTags("proposedUtilityTariffs")
@common.Controller("proposedUtilityTariffs")
export class ProposedUtilityTariffGrpcController extends ProposedUtilityTariffGrpcControllerBase {
  constructor(protected readonly service: ProposedUtilityTariffService) {
    super(service);
  }
}
