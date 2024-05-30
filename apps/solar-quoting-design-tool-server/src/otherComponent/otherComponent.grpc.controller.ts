import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OtherComponentService } from "./otherComponent.service";
import { OtherComponentGrpcControllerBase } from "./base/otherComponent.grpc.controller.base";

@swagger.ApiTags("otherComponents")
@common.Controller("otherComponents")
export class OtherComponentGrpcController extends OtherComponentGrpcControllerBase {
  constructor(protected readonly service: OtherComponentService) {
    super(service);
  }
}
