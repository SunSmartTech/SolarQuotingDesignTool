import * as graphql from "@nestjs/graphql";
import { CostingResolverBase } from "./base/costing.resolver.base";
import { Costing } from "./base/Costing";
import { CostingService } from "./costing.service";

@graphql.Resolver(() => Costing)
export class CostingResolver extends CostingResolverBase {
  constructor(protected readonly service: CostingService) {
    super(service);
  }
}
