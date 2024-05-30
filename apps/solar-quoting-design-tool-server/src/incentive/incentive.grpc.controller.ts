import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IncentiveService } from "./incentive.service";
import { IncentiveGrpcControllerBase } from "./base/incentive.grpc.controller.base";

@swagger.ApiTags("incentives")
@common.Controller("incentives")
export class IncentiveGrpcController extends IncentiveGrpcControllerBase {
  constructor(protected readonly service: IncentiveService) {
    super(service);
  }
}
