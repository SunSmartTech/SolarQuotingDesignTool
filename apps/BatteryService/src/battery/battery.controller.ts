import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BatteryService } from "./battery.service";
import { BatteryControllerBase } from "./base/battery.controller.base";

@swagger.ApiTags("batteries")
@common.Controller("batteries")
export class BatteryController extends BatteryControllerBase {
  constructor(protected readonly service: BatteryService) {
    super(service);
  }
}
