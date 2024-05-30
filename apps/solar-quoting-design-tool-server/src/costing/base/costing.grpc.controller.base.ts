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
import { CostingService } from "../costing.service";
import { CostingCreateInput } from "./CostingCreateInput";
import { CostingWhereInput } from "./CostingWhereInput";
import { CostingWhereUniqueInput } from "./CostingWhereUniqueInput";
import { CostingFindManyArgs } from "./CostingFindManyArgs";
import { CostingUpdateInput } from "./CostingUpdateInput";
import { Costing } from "./Costing";

export class CostingGrpcControllerBase {
  constructor(protected readonly service: CostingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Costing })
  @GrpcMethod("CostingService", "createCosting")
  async createCosting(
    @common.Body() data: CostingCreateInput
  ): Promise<Costing> {
    return await this.service.createCosting({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Costing] })
  @ApiNestedQuery(CostingFindManyArgs)
  @GrpcMethod("CostingService", "costings")
  async costings(@common.Req() request: Request): Promise<Costing[]> {
    const args = plainToClass(CostingFindManyArgs, request.query);
    return this.service.costings({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Costing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CostingService", "costing")
  async costing(
    @common.Param() params: CostingWhereUniqueInput
  ): Promise<Costing | null> {
    const result = await this.service.costing({
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
  @swagger.ApiOkResponse({ type: Costing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CostingService", "updateCosting")
  async updateCosting(
    @common.Param() params: CostingWhereUniqueInput,
    @common.Body() data: CostingUpdateInput
  ): Promise<Costing | null> {
    try {
      return await this.service.updateCosting({
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
  @swagger.ApiOkResponse({ type: Costing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CostingService", "deleteCosting")
  async deleteCosting(
    @common.Param() params: CostingWhereUniqueInput
  ): Promise<Costing | null> {
    try {
      return await this.service.deleteCosting({
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
