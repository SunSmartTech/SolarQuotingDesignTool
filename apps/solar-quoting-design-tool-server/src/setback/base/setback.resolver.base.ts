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
import { Setback } from "./Setback";
import { SetbackCountArgs } from "./SetbackCountArgs";
import { SetbackFindManyArgs } from "./SetbackFindManyArgs";
import { SetbackFindUniqueArgs } from "./SetbackFindUniqueArgs";
import { DeleteSetbackArgs } from "./DeleteSetbackArgs";
import { SetbackService } from "../setback.service";
@graphql.Resolver(() => Setback)
export class SetbackResolverBase {
  constructor(protected readonly service: SetbackService) {}

  async _setbacksMeta(
    @graphql.Args() args: SetbackCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Setback])
  async setbacks(
    @graphql.Args() args: SetbackFindManyArgs
  ): Promise<Setback[]> {
    return this.service.setbacks(args);
  }

  @graphql.Query(() => Setback, { nullable: true })
  async setback(
    @graphql.Args() args: SetbackFindUniqueArgs
  ): Promise<Setback | null> {
    const result = await this.service.setback(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Setback)
  async deleteSetback(
    @graphql.Args() args: DeleteSetbackArgs
  ): Promise<Setback | null> {
    try {
      return await this.service.deleteSetback(args);
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