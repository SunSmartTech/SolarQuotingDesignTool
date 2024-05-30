import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrgService } from "./org.service";
import { OrgControllerBase } from "./base/org.controller.base";

@swagger.ApiTags("orgs")
@common.Controller("orgs")
export class OrgController extends OrgControllerBase {
  constructor(protected readonly service: OrgService) {
    super(service);
  }
}
