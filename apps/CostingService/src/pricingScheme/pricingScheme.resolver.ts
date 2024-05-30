import * as graphql from "@nestjs/graphql";
import { PricingSchemeResolverBase } from "./base/pricingScheme.resolver.base";
import { PricingScheme } from "./base/PricingScheme";
import { PricingSchemeService } from "./pricingScheme.service";

@graphql.Resolver(() => PricingScheme)
export class PricingSchemeResolver extends PricingSchemeResolverBase {
  constructor(protected readonly service: PricingSchemeService) {
    super(service);
  }
}
