import * as graphql from "@nestjs/graphql";
import { EventResolverBase } from "./base/event.resolver.base";
import { Event } from "./base/Event";
import { EventService } from "./event.service";

@graphql.Resolver(() => Event)
export class EventResolver extends EventResolverBase {
  constructor(protected readonly service: EventService) {
    super(service);
  }
}
