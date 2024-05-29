import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InverterService } from "./inverter.service";
import { InverterControllerBase } from "./base/inverter.controller.base";

@swagger.ApiTags("inverters")
@common.Controller("inverters")
export class InverterController extends InverterControllerBase {
  constructor(protected readonly service: InverterService) {
    super(service);
  }
}
