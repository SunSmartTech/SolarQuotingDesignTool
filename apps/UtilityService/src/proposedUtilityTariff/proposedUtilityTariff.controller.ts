import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProposedUtilityTariffService } from "./proposedUtilityTariff.service";
import { ProposedUtilityTariffControllerBase } from "./base/proposedUtilityTariff.controller.base";

@swagger.ApiTags("proposedUtilityTariffs")
@common.Controller("proposedUtilityTariffs")
export class ProposedUtilityTariffController extends ProposedUtilityTariffControllerBase {
  constructor(protected readonly service: ProposedUtilityTariffService) {
    super(service);
  }
}
