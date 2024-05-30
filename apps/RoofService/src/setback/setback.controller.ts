import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SetbackService } from "./setback.service";
import { SetbackControllerBase } from "./base/setback.controller.base";

@swagger.ApiTags("setbacks")
@common.Controller("setbacks")
export class SetbackController extends SetbackControllerBase {
  constructor(protected readonly service: SetbackService) {
    super(service);
  }
}
