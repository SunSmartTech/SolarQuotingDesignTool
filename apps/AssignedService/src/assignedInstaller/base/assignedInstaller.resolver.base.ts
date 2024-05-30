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
import { AssignedInstaller } from "./AssignedInstaller";
import { AssignedInstallerCountArgs } from "./AssignedInstallerCountArgs";
import { AssignedInstallerFindManyArgs } from "./AssignedInstallerFindManyArgs";
import { AssignedInstallerFindUniqueArgs } from "./AssignedInstallerFindUniqueArgs";
import { CreateAssignedInstallerArgs } from "./CreateAssignedInstallerArgs";
import { UpdateAssignedInstallerArgs } from "./UpdateAssignedInstallerArgs";
import { DeleteAssignedInstallerArgs } from "./DeleteAssignedInstallerArgs";
import { AssignedInstallerService } from "../assignedInstaller.service";
@graphql.Resolver(() => AssignedInstaller)
export class AssignedInstallerResolverBase {
  constructor(protected readonly service: AssignedInstallerService) {}

  async _assignedInstallersMeta(
    @graphql.Args() args: AssignedInstallerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AssignedInstaller])
  async assignedInstallers(
    @graphql.Args() args: AssignedInstallerFindManyArgs
  ): Promise<AssignedInstaller[]> {
    return this.service.assignedInstallers(args);
  }

  @graphql.Query(() => AssignedInstaller, { nullable: true })
  async assignedInstaller(
    @graphql.Args() args: AssignedInstallerFindUniqueArgs
  ): Promise<AssignedInstaller | null> {
    const result = await this.service.assignedInstaller(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AssignedInstaller)
  async createAssignedInstaller(
    @graphql.Args() args: CreateAssignedInstallerArgs
  ): Promise<AssignedInstaller> {
    return await this.service.createAssignedInstaller({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AssignedInstaller)
  async updateAssignedInstaller(
    @graphql.Args() args: UpdateAssignedInstallerArgs
  ): Promise<AssignedInstaller | null> {
    try {
      return await this.service.updateAssignedInstaller({
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

  @graphql.Mutation(() => AssignedInstaller)
  async deleteAssignedInstaller(
    @graphql.Args() args: DeleteAssignedInstallerArgs
  ): Promise<AssignedInstaller | null> {
    try {
      return await this.service.deleteAssignedInstaller(args);
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
