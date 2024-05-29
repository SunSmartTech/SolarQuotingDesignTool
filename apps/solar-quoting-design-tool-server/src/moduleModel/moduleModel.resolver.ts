import * as graphql from "@nestjs/graphql";
import { ModuleModelResolverBase } from "./base/moduleModel.resolver.base";
import { ModuleModel } from "./base/ModuleModel";
import { ModuleModelService } from "./moduleModel.service";

@graphql.Resolver(() => ModuleModel)
export class ModuleModelResolver extends ModuleModelResolverBase {
  constructor(protected readonly service: ModuleModelService) {
    super(service);
  }
}
