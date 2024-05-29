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
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AssignedContact } from "./AssignedContact";
import { AssignedContactCountArgs } from "./AssignedContactCountArgs";
import { AssignedContactFindManyArgs } from "./AssignedContactFindManyArgs";
import { AssignedContactFindUniqueArgs } from "./AssignedContactFindUniqueArgs";
import { CreateAssignedContactArgs } from "./CreateAssignedContactArgs";
import { UpdateAssignedContactArgs } from "./UpdateAssignedContactArgs";
import { DeleteAssignedContactArgs } from "./DeleteAssignedContactArgs";
import { Contact } from "../../contact/base/Contact";
import { AssignedContactService } from "../assignedContact.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssignedContact)
export class AssignedContactResolverBase {
  constructor(
    protected readonly service: AssignedContactService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AssignedContact",
    action: "read",
    possession: "any",
  })
  async _assignedContactsMeta(
    @graphql.Args() args: AssignedContactCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AssignedContact])
  @nestAccessControl.UseRoles({
    resource: "AssignedContact",
    action: "read",
    possession: "any",
  })
  async assignedContacts(
    @graphql.Args() args: AssignedContactFindManyArgs
  ): Promise<AssignedContact[]> {
    return this.service.assignedContacts(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AssignedContact, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AssignedContact",
    action: "read",
    possession: "own",
  })
  async assignedContact(
    @graphql.Args() args: AssignedContactFindUniqueArgs
  ): Promise<AssignedContact | null> {
    const result = await this.service.assignedContact(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AssignedContact)
  @nestAccessControl.UseRoles({
    resource: "AssignedContact",
    action: "create",
    possession: "any",
  })
  async createAssignedContact(
    @graphql.Args() args: CreateAssignedContactArgs
  ): Promise<AssignedContact> {
    return await this.service.createAssignedContact({
      ...args,
      data: {
        ...args.data,

        contact: args.data.contact
          ? {
              connect: args.data.contact,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => AssignedContact)
  @nestAccessControl.UseRoles({
    resource: "AssignedContact",
    action: "update",
    possession: "any",
  })
  async updateAssignedContact(
    @graphql.Args() args: UpdateAssignedContactArgs
  ): Promise<AssignedContact | null> {
    try {
      return await this.service.updateAssignedContact({
        ...args,
        data: {
          ...args.data,

          contact: args.data.contact
            ? {
                connect: args.data.contact,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => AssignedContact)
  @nestAccessControl.UseRoles({
    resource: "AssignedContact",
    action: "delete",
    possession: "any",
  })
  async deleteAssignedContact(
    @graphql.Args() args: DeleteAssignedContactArgs
  ): Promise<AssignedContact | null> {
    try {
      return await this.service.deleteAssignedContact(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Contact, {
    nullable: true,
    name: "contact",
  })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  async getContact(
    @graphql.Parent() parent: AssignedContact
  ): Promise<Contact | null> {
    const result = await this.service.getContact(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
