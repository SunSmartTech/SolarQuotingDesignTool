import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComponentActivationService } from "./componentActivation.service";
import { ComponentActivationGrpcControllerBase } from "./base/componentActivation.grpc.controller.base";

@swagger.ApiTags("componentActivations")
@common.Controller("componentActivations")
export class ComponentActivationGrpcController extends ComponentActivationGrpcControllerBase {
  constructor(protected readonly service: ComponentActivationService) {
    super(service);
  }
}
