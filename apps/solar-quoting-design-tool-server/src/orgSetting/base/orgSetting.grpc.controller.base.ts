/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { OrgSettingService } from "../orgSetting.service";
import { OrgSettingCreateInput } from "./OrgSettingCreateInput";
import { OrgSettingWhereInput } from "./OrgSettingWhereInput";
import { OrgSettingWhereUniqueInput } from "./OrgSettingWhereUniqueInput";
import { OrgSettingFindManyArgs } from "./OrgSettingFindManyArgs";
import { OrgSettingUpdateInput } from "./OrgSettingUpdateInput";
import { OrgSetting } from "./OrgSetting";

export class OrgSettingGrpcControllerBase {
  constructor(protected readonly service: OrgSettingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OrgSetting })
  @GrpcMethod("OrgSettingService", "createOrgSetting")
  async createOrgSetting(
    @common.Body() data: OrgSettingCreateInput
  ): Promise<OrgSetting> {
    return await this.service.createOrgSetting({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OrgSetting] })
  @ApiNestedQuery(OrgSettingFindManyArgs)
  @GrpcMethod("OrgSettingService", "orgSettings")
  async orgSettings(@common.Req() request: Request): Promise<OrgSetting[]> {
    const args = plainToClass(OrgSettingFindManyArgs, request.query);
    return this.service.orgSettings({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OrgSetting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("OrgSettingService", "orgSetting")
  async orgSetting(
    @common.Param() params: OrgSettingWhereUniqueInput
  ): Promise<OrgSetting | null> {
    const result = await this.service.orgSetting({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: OrgSetting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("OrgSettingService", "updateOrgSetting")
  async updateOrgSetting(
    @common.Param() params: OrgSettingWhereUniqueInput,
    @common.Body() data: OrgSettingUpdateInput
  ): Promise<OrgSetting | null> {
    try {
      return await this.service.updateOrgSetting({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: OrgSetting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("OrgSettingService", "deleteOrgSetting")
  async deleteOrgSetting(
    @common.Param() params: OrgSettingWhereUniqueInput
  ): Promise<OrgSetting | null> {
    try {
      return await this.service.deleteOrgSetting({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}