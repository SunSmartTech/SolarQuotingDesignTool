import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignedTeamMemberService } from "./assignedTeamMember.service";
import { AssignedTeamMemberGrpcControllerBase } from "./base/assignedTeamMember.grpc.controller.base";

@swagger.ApiTags("assignedTeamMembers")
@common.Controller("assignedTeamMembers")
export class AssignedTeamMemberGrpcController extends AssignedTeamMemberGrpcControllerBase {
  constructor(protected readonly service: AssignedTeamMemberService) {
    super(service);
  }
}
