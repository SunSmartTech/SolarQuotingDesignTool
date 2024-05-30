import * as graphql from "@nestjs/graphql";
import { EventTypeResolverBase } from "./base/eventType.resolver.base";
import { EventType } from "./base/EventType";
import { EventTypeService } from "./eventType.service";

@graphql.Resolver(() => EventType)
export class EventTypeResolver extends EventTypeResolverBase {
  constructor(protected readonly service: EventTypeService) {
    super(service);
  }
}
