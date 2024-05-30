import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SetbackService } from "./setback.service";
import { SetbackGrpcControllerBase } from "./base/setback.grpc.controller.base";

@swagger.ApiTags("setbacks")
@common.Controller("setbacks")
export class SetbackGrpcController extends SetbackGrpcControllerBase {
  constructor(protected readonly service: SetbackService) {
    super(service);
  }
}
