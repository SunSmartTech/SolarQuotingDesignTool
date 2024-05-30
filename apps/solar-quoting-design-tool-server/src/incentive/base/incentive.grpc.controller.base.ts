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
import { IncentiveService } from "../incentive.service";
import { IncentiveCreateInput } from "./IncentiveCreateInput";
import { IncentiveWhereInput } from "./IncentiveWhereInput";
import { IncentiveWhereUniqueInput } from "./IncentiveWhereUniqueInput";
import { IncentiveFindManyArgs } from "./IncentiveFindManyArgs";
import { IncentiveUpdateInput } from "./IncentiveUpdateInput";
import { Incentive } from "./Incentive";

export class IncentiveGrpcControllerBase {
  constructor(protected readonly service: IncentiveService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Incentive })
  @GrpcMethod("IncentiveService", "createIncentive")
  async createIncentive(
    @common.Body() data: IncentiveCreateInput
  ): Promise<Incentive> {
    return await this.service.createIncentive({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Incentive] })
  @ApiNestedQuery(IncentiveFindManyArgs)
  @GrpcMethod("IncentiveService", "incentives")
  async incentives(@common.Req() request: Request): Promise<Incentive[]> {
    const args = plainToClass(IncentiveFindManyArgs, request.query);
    return this.service.incentives({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Incentive })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("IncentiveService", "incentive")
  async incentive(
    @common.Param() params: IncentiveWhereUniqueInput
  ): Promise<Incentive | null> {
    const result = await this.service.incentive({
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
  @swagger.ApiOkResponse({ type: Incentive })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("IncentiveService", "updateIncentive")
  async updateIncentive(
    @common.Param() params: IncentiveWhereUniqueInput,
    @common.Body() data: IncentiveUpdateInput
  ): Promise<Incentive | null> {
    try {
      return await this.service.updateIncentive({
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
  @swagger.ApiOkResponse({ type: Incentive })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("IncentiveService", "deleteIncentive")
  async deleteIncentive(
    @common.Param() params: IncentiveWhereUniqueInput
  ): Promise<Incentive | null> {
    try {
      return await this.service.deleteIncentive({
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