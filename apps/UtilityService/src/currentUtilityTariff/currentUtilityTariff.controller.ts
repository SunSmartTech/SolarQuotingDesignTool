import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CurrentUtilityTariffService } from "./currentUtilityTariff.service";
import { CurrentUtilityTariffControllerBase } from "./base/currentUtilityTariff.controller.base";

@swagger.ApiTags("currentUtilityTariffs")
@common.Controller("currentUtilityTariffs")
export class CurrentUtilityTariffController extends CurrentUtilityTariffControllerBase {
  constructor(protected readonly service: CurrentUtilityTariffService) {
    super(service);
  }
}
