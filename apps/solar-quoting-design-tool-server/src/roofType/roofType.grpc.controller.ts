import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoofTypeService } from "./roofType.service";
import { RoofTypeGrpcControllerBase } from "./base/roofType.grpc.controller.base";

@swagger.ApiTags("roofTypes")
@common.Controller("roofTypes")
export class RoofTypeGrpcController extends RoofTypeGrpcControllerBase {
  constructor(protected readonly service: RoofTypeService) {
    super(service);
  }
}
