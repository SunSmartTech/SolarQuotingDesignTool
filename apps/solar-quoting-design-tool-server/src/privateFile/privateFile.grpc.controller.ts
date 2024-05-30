import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrivateFileService } from "./privateFile.service";
import { PrivateFileGrpcControllerBase } from "./base/privateFile.grpc.controller.base";

@swagger.ApiTags("privateFiles")
@common.Controller("privateFiles")
export class PrivateFileGrpcController extends PrivateFileGrpcControllerBase {
  constructor(protected readonly service: PrivateFileService) {
    super(service);
  }
}
