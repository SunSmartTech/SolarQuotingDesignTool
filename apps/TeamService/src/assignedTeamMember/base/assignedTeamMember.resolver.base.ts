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
import { AssignedTeamMember } from "./AssignedTeamMember";
import { AssignedTeamMemberCountArgs } from "./AssignedTeamMemberCountArgs";
import { AssignedTeamMemberFindManyArgs } from "./AssignedTeamMemberFindManyArgs";
import { AssignedTeamMemberFindUniqueArgs } from "./AssignedTeamMemberFindUniqueArgs";
import { CreateAssignedTeamMemberArgs } from "./CreateAssignedTeamMemberArgs";
import { UpdateAssignedTeamMemberArgs } from "./UpdateAssignedTeamMemberArgs";
import { DeleteAssignedTeamMemberArgs } from "./DeleteAssignedTeamMemberArgs";
import { AssignedTeamMemberService } from "../assignedTeamMember.service";
@graphql.Resolver(() => AssignedTeamMember)
export class AssignedTeamMemberResolverBase {
  constructor(protected readonly service: AssignedTeamMemberService) {}

  async _assignedTeamMembersMeta(
    @graphql.Args() args: AssignedTeamMemberCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AssignedTeamMember])
  async assignedTeamMembers(
    @graphql.Args() args: AssignedTeamMemberFindManyArgs
  ): Promise<AssignedTeamMember[]> {
    return this.service.assignedTeamMembers(args);
  }

  @graphql.Query(() => AssignedTeamMember, { nullable: true })
  async assignedTeamMember(
    @graphql.Args() args: AssignedTeamMemberFindUniqueArgs
  ): Promise<AssignedTeamMember | null> {
    const result = await this.service.assignedTeamMember(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AssignedTeamMember)
  async createAssignedTeamMember(
    @graphql.Args() args: CreateAssignedTeamMemberArgs
  ): Promise<AssignedTeamMember> {
    return await this.service.createAssignedTeamMember({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AssignedTeamMember)
  async updateAssignedTeamMember(
    @graphql.Args() args: UpdateAssignedTeamMemberArgs
  ): Promise<AssignedTeamMember | null> {
    try {
      return await this.service.updateAssignedTeamMember({
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

  @graphql.Mutation(() => AssignedTeamMember)
  async deleteAssignedTeamMember(
    @graphql.Args() args: DeleteAssignedTeamMemberArgs
  ): Promise<AssignedTeamMember | null> {
    try {
      return await this.service.deleteAssignedTeamMember(args);
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
