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
import { ModuleModel } from "./ModuleModel";
import { ModuleModelCountArgs } from "./ModuleModelCountArgs";
import { ModuleModelFindManyArgs } from "./ModuleModelFindManyArgs";
import { ModuleModelFindUniqueArgs } from "./ModuleModelFindUniqueArgs";
import { DeleteModuleModelArgs } from "./DeleteModuleModelArgs";
import { ModuleModelService } from "../moduleModel.service";
@graphql.Resolver(() => ModuleModel)
export class ModuleModelResolverBase {
  constructor(protected readonly service: ModuleModelService) {}

  async _moduleModelsMeta(
    @graphql.Args() args: ModuleModelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ModuleModel])
  async moduleModels(
    @graphql.Args() args: ModuleModelFindManyArgs
  ): Promise<ModuleModel[]> {
    return this.service.moduleModels(args);
  }

  @graphql.Query(() => ModuleModel, { nullable: true })
  async moduleModel(
    @graphql.Args() args: ModuleModelFindUniqueArgs
  ): Promise<ModuleModel | null> {
    const result = await this.service.moduleModel(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ModuleModel)
  async deleteModuleModel(
    @graphql.Args() args: DeleteModuleModelArgs
  ): Promise<ModuleModel | null> {
    try {
      return await this.service.deleteModuleModel(args);
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