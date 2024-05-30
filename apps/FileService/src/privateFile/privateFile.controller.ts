import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrivateFileService } from "./privateFile.service";
import { PrivateFileControllerBase } from "./base/privateFile.controller.base";

@swagger.ApiTags("privateFiles")
@common.Controller("privateFiles")
export class PrivateFileController extends PrivateFileControllerBase {
  constructor(protected readonly service: PrivateFileService) {
    super(service);
  }
}
