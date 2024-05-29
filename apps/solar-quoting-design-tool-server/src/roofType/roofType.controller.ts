import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoofTypeService } from "./roofType.service";
import { RoofTypeControllerBase } from "./base/roofType.controller.base";

@swagger.ApiTags("roofTypes")
@common.Controller("roofTypes")
export class RoofTypeController extends RoofTypeControllerBase {
  constructor(protected readonly service: RoofTypeService) {
    super(service);
  }
}
