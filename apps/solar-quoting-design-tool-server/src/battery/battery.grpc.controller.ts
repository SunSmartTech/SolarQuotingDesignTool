import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BatteryService } from "./battery.service";
import { BatteryGrpcControllerBase } from "./base/battery.grpc.controller.base";

@swagger.ApiTags("batteries")
@common.Controller("batteries")
export class BatteryGrpcController extends BatteryGrpcControllerBase {
  constructor(protected readonly service: BatteryService) {
    super(service);
  }
}
