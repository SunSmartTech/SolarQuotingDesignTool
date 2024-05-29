import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IncentiveService } from "./incentive.service";
import { IncentiveControllerBase } from "./base/incentive.controller.base";

@swagger.ApiTags("incentives")
@common.Controller("incentives")
export class IncentiveController extends IncentiveControllerBase {
  constructor(protected readonly service: IncentiveService) {
    super(service);
  }
}
