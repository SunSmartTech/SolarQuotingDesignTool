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
import { BatteryService } from "../battery.service";
import { BatteryCreateInput } from "./BatteryCreateInput";
import { Battery } from "./Battery";
import { BatteryFindManyArgs } from "./BatteryFindManyArgs";
import { BatteryWhereUniqueInput } from "./BatteryWhereUniqueInput";
import { BatteryUpdateInput } from "./BatteryUpdateInput";

export class BatteryControllerBase {
  constructor(protected readonly service: BatteryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Battery })
  async createBattery(
    @common.Body() data: BatteryCreateInput
  ): Promise<Battery> {
    return await this.service.createBattery({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Battery] })
  @ApiNestedQuery(BatteryFindManyArgs)
  async batteries(@common.Req() request: Request): Promise<Battery[]> {
    const args = plainToClass(BatteryFindManyArgs, request.query);
    return this.service.batteries({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Battery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async battery(
    @common.Param() params: BatteryWhereUniqueInput
  ): Promise<Battery | null> {
    const result = await this.service.battery({
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
  @swagger.ApiOkResponse({ type: Battery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBattery(
    @common.Param() params: BatteryWhereUniqueInput,
    @common.Body() data: BatteryUpdateInput
  ): Promise<Battery | null> {
    try {
      return await this.service.updateBattery({
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
  @swagger.ApiOkResponse({ type: Battery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBattery(
    @common.Param() params: BatteryWhereUniqueInput
  ): Promise<Battery | null> {
    try {
      return await this.service.deleteBattery({
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
