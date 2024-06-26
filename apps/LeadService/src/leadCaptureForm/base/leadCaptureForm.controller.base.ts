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
import { LeadCaptureFormService } from "../leadCaptureForm.service";
import { LeadCaptureFormCreateInput } from "./LeadCaptureFormCreateInput";
import { LeadCaptureForm } from "./LeadCaptureForm";
import { LeadCaptureFormFindManyArgs } from "./LeadCaptureFormFindManyArgs";
import { LeadCaptureFormWhereUniqueInput } from "./LeadCaptureFormWhereUniqueInput";
import { LeadCaptureFormUpdateInput } from "./LeadCaptureFormUpdateInput";

export class LeadCaptureFormControllerBase {
  constructor(protected readonly service: LeadCaptureFormService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LeadCaptureForm })
  async createLeadCaptureForm(
    @common.Body() data: LeadCaptureFormCreateInput
  ): Promise<LeadCaptureForm> {
    return await this.service.createLeadCaptureForm({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [LeadCaptureForm] })
  @ApiNestedQuery(LeadCaptureFormFindManyArgs)
  async leadCaptureForms(
    @common.Req() request: Request
  ): Promise<LeadCaptureForm[]> {
    const args = plainToClass(LeadCaptureFormFindManyArgs, request.query);
    return this.service.leadCaptureForms({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: LeadCaptureForm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async leadCaptureForm(
    @common.Param() params: LeadCaptureFormWhereUniqueInput
  ): Promise<LeadCaptureForm | null> {
    const result = await this.service.leadCaptureForm({
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
  @swagger.ApiOkResponse({ type: LeadCaptureForm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLeadCaptureForm(
    @common.Param() params: LeadCaptureFormWhereUniqueInput,
    @common.Body() data: LeadCaptureFormUpdateInput
  ): Promise<LeadCaptureForm | null> {
    try {
      return await this.service.updateLeadCaptureForm({
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
  @swagger.ApiOkResponse({ type: LeadCaptureForm })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLeadCaptureForm(
    @common.Param() params: LeadCaptureFormWhereUniqueInput
  ): Promise<LeadCaptureForm | null> {
    try {
      return await this.service.deleteLeadCaptureForm({
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
