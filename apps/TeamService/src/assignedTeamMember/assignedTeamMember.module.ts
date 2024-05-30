import { Module } from "@nestjs/common";
import { AssignedTeamMemberModuleBase } from "./base/assignedTeamMember.module.base";
import { AssignedTeamMemberService } from "./assignedTeamMember.service";
import { AssignedTeamMemberController } from "./assignedTeamMember.controller";
import { AssignedTeamMemberResolver } from "./assignedTeamMember.resolver";

@Module({
  imports: [AssignedTeamMemberModuleBase],
  controllers: [AssignedTeamMemberController],
  providers: [AssignedTeamMemberService, AssignedTeamMemberResolver],
  exports: [AssignedTeamMemberService],
})
export class AssignedTeamMemberModule {}
