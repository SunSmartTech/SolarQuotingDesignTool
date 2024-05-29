import * as graphql from "@nestjs/graphql";
import { InverterResolverBase } from "./base/inverter.resolver.base";
import { Inverter } from "./base/Inverter";
import { InverterService } from "./inverter.service";

@graphql.Resolver(() => Inverter)
export class InverterResolver extends InverterResolverBase {
  constructor(protected readonly service: InverterService) {
    super(service);
  }
}
