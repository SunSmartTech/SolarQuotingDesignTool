import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PublicFileService } from "./publicFile.service";
import { PublicFileControllerBase } from "./base/publicFile.controller.base";

@swagger.ApiTags("publicFiles")
@common.Controller("publicFiles")
export class PublicFileController extends PublicFileControllerBase {
  constructor(protected readonly service: PublicFileService) {
    super(service);
  }
}
