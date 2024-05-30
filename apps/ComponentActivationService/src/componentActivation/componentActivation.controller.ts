import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComponentActivationService } from "./componentActivation.service";
import { ComponentActivationControllerBase } from "./base/componentActivation.controller.base";

@swagger.ApiTags("componentActivations")
@common.Controller("componentActivations")
export class ComponentActivationController extends ComponentActivationControllerBase {
  constructor(protected readonly service: ComponentActivationService) {
    super(service);
  }
}
