import * as graphql from "@nestjs/graphql";
import { AssignedSiteInspectorResolverBase } from "./base/assignedSiteInspector.resolver.base";
import { AssignedSiteInspector } from "./base/AssignedSiteInspector";
import { AssignedSiteInspectorService } from "./assignedSiteInspector.service";

@graphql.Resolver(() => AssignedSiteInspector)
export class AssignedSiteInspectorResolver extends AssignedSiteInspectorResolverBase {
  constructor(protected readonly service: AssignedSiteInspectorService) {
    super(service);
  }
}
