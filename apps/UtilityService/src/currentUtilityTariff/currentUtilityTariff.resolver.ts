import * as graphql from "@nestjs/graphql";
import { CurrentUtilityTariffResolverBase } from "./base/currentUtilityTariff.resolver.base";
import { CurrentUtilityTariff } from "./base/CurrentUtilityTariff";
import { CurrentUtilityTariffService } from "./currentUtilityTariff.service";

@graphql.Resolver(() => CurrentUtilityTariff)
export class CurrentUtilityTariffResolver extends CurrentUtilityTariffResolverBase {
  constructor(protected readonly service: CurrentUtilityTariffService) {
    super(service);
  }
}
