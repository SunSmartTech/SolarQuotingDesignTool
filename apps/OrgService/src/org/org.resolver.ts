import * as graphql from "@nestjs/graphql";
import { OrgResolverBase } from "./base/org.resolver.base";
import { Org } from "./base/Org";
import { OrgService } from "./org.service";

@graphql.Resolver(() => Org)
export class OrgResolver extends OrgResolverBase {
  constructor(protected readonly service: OrgService) {
    super(service);
  }
}
