import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ModuleModelService } from "./moduleModel.service";
import { ModuleModelGrpcControllerBase } from "./base/moduleModel.grpc.controller.base";

@swagger.ApiTags("moduleModels")
@common.Controller("moduleModels")
export class ModuleModelGrpcController extends ModuleModelGrpcControllerBase {
  constructor(protected readonly service: ModuleModelService) {
    super(service);
  }
}
