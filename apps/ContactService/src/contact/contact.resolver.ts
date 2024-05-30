import * as graphql from "@nestjs/graphql";
import { ContactResolverBase } from "./base/contact.resolver.base";
import { Contact } from "./base/Contact";
import { ContactService } from "./contact.service";

@graphql.Resolver(() => Contact)
export class ContactResolver extends ContactResolverBase {
  constructor(protected readonly service: ContactService) {
    super(service);
  }
}
