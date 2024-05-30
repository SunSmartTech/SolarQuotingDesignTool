import * as graphql from "@nestjs/graphql";
import { SetbackResolverBase } from "./base/setback.resolver.base";
import { Setback } from "./base/Setback";
import { SetbackService } from "./setback.service";

@graphql.Resolver(() => Setback)
export class SetbackResolver extends SetbackResolverBase {
  constructor(protected readonly service: SetbackService) {
    super(service);
  }
}
