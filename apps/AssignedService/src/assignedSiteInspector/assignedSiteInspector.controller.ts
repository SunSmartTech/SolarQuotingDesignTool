import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignedSiteInspectorService } from "./assignedSiteInspector.service";
import { AssignedSiteInspectorControllerBase } from "./base/assignedSiteInspector.controller.base";

@swagger.ApiTags("assignedSiteInspectors")
@common.Controller("assignedSiteInspectors")
export class AssignedSiteInspectorController extends AssignedSiteInspectorControllerBase {
  constructor(protected readonly service: AssignedSiteInspectorService) {
    super(service);
  }
}
