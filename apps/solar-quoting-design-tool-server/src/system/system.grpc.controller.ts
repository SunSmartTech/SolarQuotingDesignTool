import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SystemService } from "./system.service";
import { SystemGrpcControllerBase } from "./base/system.grpc.controller.base";

@swagger.ApiTags("systems")
@common.Controller("systems")
export class SystemGrpcController extends SystemGrpcControllerBase {
  constructor(protected readonly service: SystemService) {
    super(service);
  }
}
