import * as graphql from "@nestjs/graphql";
import { IncentiveResolverBase } from "./base/incentive.resolver.base";
import { Incentive } from "./base/Incentive";
import { IncentiveService } from "./incentive.service";

@graphql.Resolver(() => Incentive)
export class IncentiveResolver extends IncentiveResolverBase {
  constructor(protected readonly service: IncentiveService) {
    super(service);
  }
}
