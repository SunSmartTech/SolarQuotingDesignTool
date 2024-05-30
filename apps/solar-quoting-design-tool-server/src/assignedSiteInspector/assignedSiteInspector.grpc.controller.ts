import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignedSiteInspectorService } from "./assignedSiteInspector.service";
import { AssignedSiteInspectorGrpcControllerBase } from "./base/assignedSiteInspector.grpc.controller.base";

@swagger.ApiTags("assignedSiteInspectors")
@common.Controller("assignedSiteInspectors")
export class AssignedSiteInspectorGrpcController extends AssignedSiteInspectorGrpcControllerBase {
  constructor(protected readonly service: AssignedSiteInspectorService) {
    super(service);
  }
}
