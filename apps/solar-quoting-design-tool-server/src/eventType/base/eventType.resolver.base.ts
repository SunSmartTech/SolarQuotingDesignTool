/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EventType } from "./EventType";
import { EventTypeCountArgs } from "./EventTypeCountArgs";
import { EventTypeFindManyArgs } from "./EventTypeFindManyArgs";
import { EventTypeFindUniqueArgs } from "./EventTypeFindUniqueArgs";
import { DeleteEventTypeArgs } from "./DeleteEventTypeArgs";
import { EventTypeService } from "../eventType.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EventType)
export class EventTypeResolverBase {
  constructor(
    protected readonly service: EventTypeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "read",
    possession: "any",
  })
  async _eventTypesMeta(
    @graphql.Args() args: EventTypeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [EventType])
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "read",
    possession: "any",
  })
  async eventTypes(
    @graphql.Args() args: EventTypeFindManyArgs
  ): Promise<EventType[]> {
    return this.service.eventTypes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EventType, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "read",
    possession: "own",
  })
  async eventType(
    @graphql.Args() args: EventTypeFindUniqueArgs
  ): Promise<EventType | null> {
    const result = await this.service.eventType(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => EventType)
  @nestAccessControl.UseRoles({
    resource: "EventType",
    action: "delete",
    possession: "any",
  })
  async deleteEventType(
    @graphql.Args() args: DeleteEventTypeArgs
  ): Promise<EventType | null> {
    try {
      return await this.service.deleteEventType(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
