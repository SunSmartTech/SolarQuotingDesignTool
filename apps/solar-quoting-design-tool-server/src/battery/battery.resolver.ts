import * as graphql from "@nestjs/graphql";
import { BatteryResolverBase } from "./base/battery.resolver.base";
import { Battery } from "./base/Battery";
import { BatteryService } from "./battery.service";

@graphql.Resolver(() => Battery)
export class BatteryResolver extends BatteryResolverBase {
  constructor(protected readonly service: BatteryService) {
    super(service);
  }
}
