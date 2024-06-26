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
import { ComponentActivationService } from "../componentActivation.service";
import { ComponentActivationCreateInput } from "./ComponentActivationCreateInput";
import { ComponentActivation } from "./ComponentActivation";
import { ComponentActivationFindManyArgs } from "./ComponentActivationFindManyArgs";
import { ComponentActivationWhereUniqueInput } from "./ComponentActivationWhereUniqueInput";
import { ComponentActivationUpdateInput } from "./ComponentActivationUpdateInput";

export class ComponentActivationControllerBase {
  constructor(protected readonly service: ComponentActivationService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ComponentActivation })
  async createComponentActivation(
    @common.Body() data: ComponentActivationCreateInput
  ): Promise<ComponentActivation> {
    return await this.service.createComponentActivation({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ComponentActivation] })
  @ApiNestedQuery(ComponentActivationFindManyArgs)
  async componentActivations(
    @common.Req() request: Request
  ): Promise<ComponentActivation[]> {
    const args = plainToClass(ComponentActivationFindManyArgs, request.query);
    return this.service.componentActivations({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ComponentActivation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async componentActivation(
    @common.Param() params: ComponentActivationWhereUniqueInput
  ): Promise<ComponentActivation | null> {
    const result = await this.service.componentActivation({
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
  @swagger.ApiOkResponse({ type: ComponentActivation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateComponentActivation(
    @common.Param() params: ComponentActivationWhereUniqueInput,
    @common.Body() data: ComponentActivationUpdateInput
  ): Promise<ComponentActivation | null> {
    try {
      return await this.service.updateComponentActivation({
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
  @swagger.ApiOkResponse({ type: ComponentActivation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteComponentActivation(
    @common.Param() params: ComponentActivationWhereUniqueInput
  ): Promise<ComponentActivation | null> {
    try {
      return await this.service.deleteComponentActivation({
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
