import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PublicFileService } from "./publicFile.service";
import { PublicFileGrpcControllerBase } from "./base/publicFile.grpc.controller.base";

@swagger.ApiTags("publicFiles")
@common.Controller("publicFiles")
export class PublicFileGrpcController extends PublicFileGrpcControllerBase {
  constructor(protected readonly service: PublicFileService) {
    super(service);
  }
}
