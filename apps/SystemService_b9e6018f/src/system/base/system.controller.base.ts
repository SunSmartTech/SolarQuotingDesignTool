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
import { SystemService } from "../system.service";
import { SystemCreateInput } from "./SystemCreateInput";
import { System } from "./System";
import { SystemFindManyArgs } from "./SystemFindManyArgs";
import { SystemWhereUniqueInput } from "./SystemWhereUniqueInput";
import { SystemUpdateInput } from "./SystemUpdateInput";

export class SystemControllerBase {
  constructor(protected readonly service: SystemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: System })
  async createSystem(@common.Body() data: SystemCreateInput): Promise<System> {
    return await this.service.createSystem({
      data: data,
      select: {
        createdAt: true,
        id: true,
        systemSize: true,
        systemType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [System] })
  @ApiNestedQuery(SystemFindManyArgs)
  async systems(@common.Req() request: Request): Promise<System[]> {
    const args = plainToClass(SystemFindManyArgs, request.query);
    return this.service.systems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        systemSize: true,
        systemType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: System })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async system(
    @common.Param() params: SystemWhereUniqueInput
  ): Promise<System | null> {
    const result = await this.service.system({
      where: params,
      select: {
        createdAt: true,
        id: true,
        systemSize: true,
        systemType: true,
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
  @swagger.ApiOkResponse({ type: System })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSystem(
    @common.Param() params: SystemWhereUniqueInput,
    @common.Body() data: SystemUpdateInput
  ): Promise<System | null> {
    try {
      return await this.service.updateSystem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          systemSize: true,
          systemType: true,
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
  @swagger.ApiOkResponse({ type: System })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSystem(
    @common.Param() params: SystemWhereUniqueInput
  ): Promise<System | null> {
    try {
      return await this.service.deleteSystem({
        where: params,
        select: {
          createdAt: true,
          id: true,
          systemSize: true,
          systemType: true,
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