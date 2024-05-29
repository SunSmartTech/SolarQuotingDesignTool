import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OtherComponentService } from "./otherComponent.service";
import { OtherComponentControllerBase } from "./base/otherComponent.controller.base";

@swagger.ApiTags("otherComponents")
@common.Controller("otherComponents")
export class OtherComponentController extends OtherComponentControllerBase {
  constructor(protected readonly service: OtherComponentService) {
    super(service);
  }
}
