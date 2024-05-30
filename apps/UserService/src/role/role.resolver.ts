import * as graphql from "@nestjs/graphql";
import { RoleResolverBase } from "./base/role.resolver.base";
import { Role } from "./base/Role";
import { RoleService } from "./role.service";

@graphql.Resolver(() => Role)
export class RoleResolver extends RoleResolverBase {
  constructor(protected readonly service: RoleService) {
    super(service);
  }
}
