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
import { DesignSettingService } from "../designSetting.service";
import { DesignSettingCreateInput } from "./DesignSettingCreateInput";
import { DesignSettingWhereInput } from "./DesignSettingWhereInput";
import { DesignSettingWhereUniqueInput } from "./DesignSettingWhereUniqueInput";
import { DesignSettingFindManyArgs } from "./DesignSettingFindManyArgs";
import { DesignSettingUpdateInput } from "./DesignSettingUpdateInput";
import { DesignSetting } from "./DesignSetting";

export class DesignSettingGrpcControllerBase {
  constructor(protected readonly service: DesignSettingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DesignSetting })
  @GrpcMethod("DesignSettingService", "createDesignSetting")
  async createDesignSetting(
    @common.Body() data: DesignSettingCreateInput
  ): Promise<DesignSetting> {
    return await this.service.createDesignSetting({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DesignSetting] })
  @ApiNestedQuery(DesignSettingFindManyArgs)
  @GrpcMethod("DesignSettingService", "designSettings")
  async designSettings(
    @common.Req() request: Request
  ): Promise<DesignSetting[]> {
    const args = plainToClass(DesignSettingFindManyArgs, request.query);
    return this.service.designSettings({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DesignSetting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DesignSettingService", "designSetting")
  async designSetting(
    @common.Param() params: DesignSettingWhereUniqueInput
  ): Promise<DesignSetting | null> {
    const result = await this.service.designSetting({
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
  @swagger.ApiOkResponse({ type: DesignSetting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DesignSettingService", "updateDesignSetting")
  async updateDesignSetting(
    @common.Param() params: DesignSettingWhereUniqueInput,
    @common.Body() data: DesignSettingUpdateInput
  ): Promise<DesignSetting | null> {
    try {
      return await this.service.updateDesignSetting({
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
  @swagger.ApiOkResponse({ type: DesignSetting })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("DesignSettingService", "deleteDesignSetting")
  async deleteDesignSetting(
    @common.Param() params: DesignSettingWhereUniqueInput
  ): Promise<DesignSetting | null> {
    try {
      return await this.service.deleteDesignSetting({
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
