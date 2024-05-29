import * as graphql from "@nestjs/graphql";
import { AssignedTeamMemberResolverBase } from "./base/assignedTeamMember.resolver.base";
import { AssignedTeamMember } from "./base/AssignedTeamMember";
import { AssignedTeamMemberService } from "./assignedTeamMember.service";

@graphql.Resolver(() => AssignedTeamMember)
export class AssignedTeamMemberResolver extends AssignedTeamMemberResolverBase {
  constructor(protected readonly service: AssignedTeamMemberService) {
    super(service);
  }
}
