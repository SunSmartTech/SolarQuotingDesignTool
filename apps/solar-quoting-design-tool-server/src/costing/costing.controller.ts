import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CostingService } from "./costing.service";
import { CostingControllerBase } from "./base/costing.controller.base";

@swagger.ApiTags("costings")
@common.Controller("costings")
export class CostingController extends CostingControllerBase {
  constructor(protected readonly service: CostingService) {
    super(service);
  }
}
