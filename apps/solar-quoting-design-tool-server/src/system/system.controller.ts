import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SystemService } from "./system.service";
import { SystemControllerBase } from "./base/system.controller.base";

@swagger.ApiTags("systems")
@common.Controller("systems")
export class SystemController extends SystemControllerBase {
  constructor(protected readonly service: SystemService) {
    super(service);
  }
}
