import * as graphql from "@nestjs/graphql";
import { AssignedInstallerResolverBase } from "./base/assignedInstaller.resolver.base";
import { AssignedInstaller } from "./base/AssignedInstaller";
import { AssignedInstallerService } from "./assignedInstaller.service";

@graphql.Resolver(() => AssignedInstaller)
export class AssignedInstallerResolver extends AssignedInstallerResolverBase {
  constructor(protected readonly service: AssignedInstallerService) {
    super(service);
  }
}
