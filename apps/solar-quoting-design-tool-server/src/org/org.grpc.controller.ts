import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrgService } from "./org.service";
import { OrgGrpcControllerBase } from "./base/org.grpc.controller.base";

@swagger.ApiTags("orgs")
@common.Controller("orgs")
export class OrgGrpcController extends OrgGrpcControllerBase {
  constructor(protected readonly service: OrgService) {
    super(service);
  }
}
