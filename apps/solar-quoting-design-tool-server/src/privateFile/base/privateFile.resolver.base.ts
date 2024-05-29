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
import { PrivateFile } from "./PrivateFile";
import { PrivateFileCountArgs } from "./PrivateFileCountArgs";
import { PrivateFileFindManyArgs } from "./PrivateFileFindManyArgs";
import { PrivateFileFindUniqueArgs } from "./PrivateFileFindUniqueArgs";
import { DeletePrivateFileArgs } from "./DeletePrivateFileArgs";
import { PrivateFileService } from "../privateFile.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PrivateFile)
export class PrivateFileResolverBase {
  constructor(
    protected readonly service: PrivateFileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PrivateFile",
    action: "read",
    possession: "any",
  })
  async _privateFilesMeta(
    @graphql.Args() args: PrivateFileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PrivateFile])
  @nestAccessControl.UseRoles({
    resource: "PrivateFile",
    action: "read",
    possession: "any",
  })
  async privateFiles(
    @graphql.Args() args: PrivateFileFindManyArgs
  ): Promise<PrivateFile[]> {
    return this.service.privateFiles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PrivateFile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PrivateFile",
    action: "read",
    possession: "own",
  })
  async privateFile(
    @graphql.Args() args: PrivateFileFindUniqueArgs
  ): Promise<PrivateFile | null> {
    const result = await this.service.privateFile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PrivateFile)
  @nestAccessControl.UseRoles({
    resource: "PrivateFile",
    action: "delete",
    possession: "any",
  })
  async deletePrivateFile(
    @graphql.Args() args: DeletePrivateFileArgs
  ): Promise<PrivateFile | null> {
    try {
      return await this.service.deletePrivateFile(args);
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
