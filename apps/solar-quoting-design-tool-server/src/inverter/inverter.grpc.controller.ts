import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InverterService } from "./inverter.service";
import { InverterGrpcControllerBase } from "./base/inverter.grpc.controller.base";

@swagger.ApiTags("inverters")
@common.Controller("inverters")
export class InverterGrpcController extends InverterGrpcControllerBase {
  constructor(protected readonly service: InverterService) {
    super(service);
  }
}
