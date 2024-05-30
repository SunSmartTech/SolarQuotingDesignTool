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
import { OrgSetting } from "./OrgSetting";
import { OrgSettingCountArgs } from "./OrgSettingCountArgs";
import { OrgSettingFindManyArgs } from "./OrgSettingFindManyArgs";
import { OrgSettingFindUniqueArgs } from "./OrgSettingFindUniqueArgs";
import { DeleteOrgSettingArgs } from "./DeleteOrgSettingArgs";
import { OrgSettingService } from "../orgSetting.service";
@graphql.Resolver(() => OrgSetting)
export class OrgSettingResolverBase {
  constructor(protected readonly service: OrgSettingService) {}

  async _orgSettingsMeta(
    @graphql.Args() args: OrgSettingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [OrgSetting])
  async orgSettings(
    @graphql.Args() args: OrgSettingFindManyArgs
  ): Promise<OrgSetting[]> {
    return this.service.orgSettings(args);
  }

  @graphql.Query(() => OrgSetting, { nullable: true })
  async orgSetting(
    @graphql.Args() args: OrgSettingFindUniqueArgs
  ): Promise<OrgSetting | null> {
    const result = await this.service.orgSetting(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => OrgSetting)
  async deleteOrgSetting(
    @graphql.Args() args: DeleteOrgSettingArgs
  ): Promise<OrgSetting | null> {
    try {
      return await this.service.deleteOrgSetting(args);
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