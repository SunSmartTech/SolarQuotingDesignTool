import * as graphql from "@nestjs/graphql";
import { SystemResolverBase } from "./base/system.resolver.base";
import { System } from "./base/System";
import { SystemService } from "./system.service";

@graphql.Resolver(() => System)
export class SystemResolver extends SystemResolverBase {
  constructor(protected readonly service: SystemService) {
    super(service);
  }
}
