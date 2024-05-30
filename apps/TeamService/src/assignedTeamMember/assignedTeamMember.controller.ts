import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignedTeamMemberService } from "./assignedTeamMember.service";
import { AssignedTeamMemberControllerBase } from "./base/assignedTeamMember.controller.base";

@swagger.ApiTags("assignedTeamMembers")
@common.Controller("assignedTeamMembers")
export class AssignedTeamMemberController extends AssignedTeamMemberControllerBase {
  constructor(protected readonly service: AssignedTeamMemberService) {
    super(service);
  }
}
