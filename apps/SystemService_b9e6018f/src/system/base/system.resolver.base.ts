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
import { System } from "./System";
import { SystemCountArgs } from "./SystemCountArgs";
import { SystemFindManyArgs } from "./SystemFindManyArgs";
import { SystemFindUniqueArgs } from "./SystemFindUniqueArgs";
import { CreateSystemArgs } from "./CreateSystemArgs";
import { UpdateSystemArgs } from "./UpdateSystemArgs";
import { DeleteSystemArgs } from "./DeleteSystemArgs";
import { SystemService } from "../system.service";
@graphql.Resolver(() => System)
export class SystemResolverBase {
  constructor(protected readonly service: SystemService) {}

  async _systemsMeta(
    @graphql.Args() args: SystemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [System])
  async systems(@graphql.Args() args: SystemFindManyArgs): Promise<System[]> {
    return this.service.systems(args);
  }

  @graphql.Query(() => System, { nullable: true })
  async system(
    @graphql.Args() args: SystemFindUniqueArgs
  ): Promise<System | null> {
    const result = await this.service.system(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => System)
  async createSystem(@graphql.Args() args: CreateSystemArgs): Promise<System> {
    return await this.service.createSystem({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => System)
  async updateSystem(
    @graphql.Args() args: UpdateSystemArgs
  ): Promise<System | null> {
    try {
      return await this.service.updateSystem({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => System)
  async deleteSystem(
    @graphql.Args() args: DeleteSystemArgs
  ): Promise<System | null> {
    try {
      return await this.service.deleteSystem(args);
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
