import * as graphql from "@nestjs/graphql";
import { ComponentActivationResolverBase } from "./base/componentActivation.resolver.base";
import { ComponentActivation } from "./base/ComponentActivation";
import { ComponentActivationService } from "./componentActivation.service";

@graphql.Resolver(() => ComponentActivation)
export class ComponentActivationResolver extends ComponentActivationResolverBase {
  constructor(protected readonly service: ComponentActivationService) {
    super(service);
  }
}
