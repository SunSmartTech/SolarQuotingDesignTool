import * as graphql from "@nestjs/graphql";
import { OtherComponentResolverBase } from "./base/otherComponent.resolver.base";
import { OtherComponent } from "./base/OtherComponent";
import { OtherComponentService } from "./otherComponent.service";

@graphql.Resolver(() => OtherComponent)
export class OtherComponentResolver extends OtherComponentResolverBase {
  constructor(protected readonly service: OtherComponentService) {
    super(service);
  }
}
