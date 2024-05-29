import * as graphql from "@nestjs/graphql";
import { AssignedContactResolverBase } from "./base/assignedContact.resolver.base";
import { AssignedContact } from "./base/AssignedContact";
import { AssignedContactService } from "./assignedContact.service";

@graphql.Resolver(() => AssignedContact)
export class AssignedContactResolver extends AssignedContactResolverBase {
  constructor(protected readonly service: AssignedContactService) {
    super(service);
  }
}
