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
import { PricingSchemeService } from "../pricingScheme.service";
import { PricingSchemeCreateInput } from "./PricingSchemeCreateInput";
import { PricingScheme } from "./PricingScheme";
import { PricingSchemeFindManyArgs } from "./PricingSchemeFindManyArgs";
import { PricingSchemeWhereUniqueInput } from "./PricingSchemeWhereUniqueInput";
import { PricingSchemeUpdateInput } from "./PricingSchemeUpdateInput";

export class PricingSchemeControllerBase {
  constructor(protected readonly service: PricingSchemeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PricingScheme })
  async createPricingScheme(
    @common.Body() data: PricingSchemeCreateInput
  ): Promise<PricingScheme> {
    return await this.service.createPricingScheme({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PricingScheme] })
  @ApiNestedQuery(PricingSchemeFindManyArgs)
  async pricingSchemes(
    @common.Req() request: Request
  ): Promise<PricingScheme[]> {
    const args = plainToClass(PricingSchemeFindManyArgs, request.query);
    return this.service.pricingSchemes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PricingScheme })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async pricingScheme(
    @common.Param() params: PricingSchemeWhereUniqueInput
  ): Promise<PricingScheme | null> {
    const result = await this.service.pricingScheme({
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
  @swagger.ApiOkResponse({ type: PricingScheme })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePricingScheme(
    @common.Param() params: PricingSchemeWhereUniqueInput,
    @common.Body() data: PricingSchemeUpdateInput
  ): Promise<PricingScheme | null> {
    try {
      return await this.service.updatePricingScheme({
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
  @swagger.ApiOkResponse({ type: PricingScheme })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePricingScheme(
    @common.Param() params: PricingSchemeWhereUniqueInput
  ): Promise<PricingScheme | null> {
    try {
      return await this.service.deletePricingScheme({
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
