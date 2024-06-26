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
import { UtilityTariffService } from "../utilityTariff.service";
import { UtilityTariffCreateInput } from "./UtilityTariffCreateInput";
import { UtilityTariffWhereInput } from "./UtilityTariffWhereInput";
import { UtilityTariffWhereUniqueInput } from "./UtilityTariffWhereUniqueInput";
import { UtilityTariffFindManyArgs } from "./UtilityTariffFindManyArgs";
import { UtilityTariffUpdateInput } from "./UtilityTariffUpdateInput";
import { UtilityTariff } from "./UtilityTariff";

export class UtilityTariffGrpcControllerBase {
  constructor(protected readonly service: UtilityTariffService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UtilityTariff })
  @GrpcMethod("UtilityTariffService", "createUtilityTariff")
  async createUtilityTariff(
    @common.Body() data: UtilityTariffCreateInput
  ): Promise<UtilityTariff> {
    return await this.service.createUtilityTariff({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UtilityTariff] })
  @ApiNestedQuery(UtilityTariffFindManyArgs)
  @GrpcMethod("UtilityTariffService", "utilityTariffs")
  async utilityTariffs(
    @common.Req() request: Request
  ): Promise<UtilityTariff[]> {
    const args = plainToClass(UtilityTariffFindManyArgs, request.query);
    return this.service.utilityTariffs({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UtilityTariff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UtilityTariffService", "utilityTariff")
  async utilityTariff(
    @common.Param() params: UtilityTariffWhereUniqueInput
  ): Promise<UtilityTariff | null> {
    const result = await this.service.utilityTariff({
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
  @swagger.ApiOkResponse({ type: UtilityTariff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UtilityTariffService", "updateUtilityTariff")
  async updateUtilityTariff(
    @common.Param() params: UtilityTariffWhereUniqueInput,
    @common.Body() data: UtilityTariffUpdateInput
  ): Promise<UtilityTariff | null> {
    try {
      return await this.service.updateUtilityTariff({
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
  @swagger.ApiOkResponse({ type: UtilityTariff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("UtilityTariffService", "deleteUtilityTariff")
  async deleteUtilityTariff(
    @common.Param() params: UtilityTariffWhereUniqueInput
  ): Promise<UtilityTariff | null> {
    try {
      return await this.service.deleteUtilityTariff({
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
