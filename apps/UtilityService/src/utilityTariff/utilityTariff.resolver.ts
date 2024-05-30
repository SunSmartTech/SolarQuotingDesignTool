import * as graphql from "@nestjs/graphql";
import { UtilityTariffResolverBase } from "./base/utilityTariff.resolver.base";
import { UtilityTariff } from "./base/UtilityTariff";
import { UtilityTariffService } from "./utilityTariff.service";

@graphql.Resolver(() => UtilityTariff)
export class UtilityTariffResolver extends UtilityTariffResolverBase {
  constructor(protected readonly service: UtilityTariffService) {
    super(service);
  }
}
