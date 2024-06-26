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
import { OtherComponentService } from "../otherComponent.service";
import { OtherComponentCreateInput } from "./OtherComponentCreateInput";
import { OtherComponent } from "./OtherComponent";
import { OtherComponentFindManyArgs } from "./OtherComponentFindManyArgs";
import { OtherComponentWhereUniqueInput } from "./OtherComponentWhereUniqueInput";
import { OtherComponentUpdateInput } from "./OtherComponentUpdateInput";

export class OtherComponentControllerBase {
  constructor(protected readonly service: OtherComponentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: OtherComponent })
  async createOtherComponent(
    @common.Body() data: OtherComponentCreateInput
  ): Promise<OtherComponent> {
    return await this.service.createOtherComponent({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [OtherComponent] })
  @ApiNestedQuery(OtherComponentFindManyArgs)
  async otherComponents(
    @common.Req() request: Request
  ): Promise<OtherComponent[]> {
    const args = plainToClass(OtherComponentFindManyArgs, request.query);
    return this.service.otherComponents({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: OtherComponent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async otherComponent(
    @common.Param() params: OtherComponentWhereUniqueInput
  ): Promise<OtherComponent | null> {
    const result = await this.service.otherComponent({
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
  @swagger.ApiOkResponse({ type: OtherComponent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOtherComponent(
    @common.Param() params: OtherComponentWhereUniqueInput,
    @common.Body() data: OtherComponentUpdateInput
  ): Promise<OtherComponent | null> {
    try {
      return await this.service.updateOtherComponent({
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
  @swagger.ApiOkResponse({ type: OtherComponent })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOtherComponent(
    @common.Param() params: OtherComponentWhereUniqueInput
  ): Promise<OtherComponent | null> {
    try {
      return await this.service.deleteOtherComponent({
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
