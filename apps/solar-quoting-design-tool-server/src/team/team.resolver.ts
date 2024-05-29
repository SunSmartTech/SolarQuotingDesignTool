import * as graphql from "@nestjs/graphql";
import { TeamResolverBase } from "./base/team.resolver.base";
import { Team } from "./base/Team";
import { TeamService } from "./team.service";

@graphql.Resolver(() => Team)
export class TeamResolver extends TeamResolverBase {
  constructor(protected readonly service: TeamService) {
    super(service);
  }
}
