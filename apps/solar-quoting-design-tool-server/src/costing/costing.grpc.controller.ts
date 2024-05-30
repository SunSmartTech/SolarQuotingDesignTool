import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CostingService } from "./costing.service";
import { CostingGrpcControllerBase } from "./base/costing.grpc.controller.base";

@swagger.ApiTags("costings")
@common.Controller("costings")
export class CostingGrpcController extends CostingGrpcControllerBase {
  constructor(protected readonly service: CostingService) {
    super(service);
  }
}
