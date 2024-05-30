import * as graphql from "@nestjs/graphql";
import { RoofTypeResolverBase } from "./base/roofType.resolver.base";
import { RoofType } from "./base/RoofType";
import { RoofTypeService } from "./roofType.service";

@graphql.Resolver(() => RoofType)
export class RoofTypeResolver extends RoofTypeResolverBase {
  constructor(protected readonly service: RoofTypeService) {
    super(service);
  }
}
