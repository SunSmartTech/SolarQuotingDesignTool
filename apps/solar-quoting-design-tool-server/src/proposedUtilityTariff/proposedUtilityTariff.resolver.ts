import * as graphql from "@nestjs/graphql";
import { ProposedUtilityTariffResolverBase } from "./base/proposedUtilityTariff.resolver.base";
import { ProposedUtilityTariff } from "./base/ProposedUtilityTariff";
import { ProposedUtilityTariffService } from "./proposedUtilityTariff.service";

@graphql.Resolver(() => ProposedUtilityTariff)
export class ProposedUtilityTariffResolver extends ProposedUtilityTariffResolverBase {
  constructor(protected readonly service: ProposedUtilityTariffService) {
    super(service);
  }
}
