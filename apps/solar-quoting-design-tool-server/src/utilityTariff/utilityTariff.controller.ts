import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UtilityTariffService } from "./utilityTariff.service";
import { UtilityTariffControllerBase } from "./base/utilityTariff.controller.base";

@swagger.ApiTags("utilityTariffs")
@common.Controller("utilityTariffs")
export class UtilityTariffController extends UtilityTariffControllerBase {
  constructor(protected readonly service: UtilityTariffService) {
    super(service);
  }
}
