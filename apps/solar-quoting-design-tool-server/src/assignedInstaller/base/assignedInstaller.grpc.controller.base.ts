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
import { AssignedInstallerService } from "../assignedInstaller.service";
import { AssignedInstallerCreateInput } from "./AssignedInstallerCreateInput";
import { AssignedInstallerWhereInput } from "./AssignedInstallerWhereInput";
import { AssignedInstallerWhereUniqueInput } from "./AssignedInstallerWhereUniqueInput";
import { AssignedInstallerFindManyArgs } from "./AssignedInstallerFindManyArgs";
import { AssignedInstallerUpdateInput } from "./AssignedInstallerUpdateInput";
import { AssignedInstaller } from "./AssignedInstaller";

export class AssignedInstallerGrpcControllerBase {
  constructor(protected readonly service: AssignedInstallerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AssignedInstaller })
  @GrpcMethod("AssignedInstallerService", "createAssignedInstaller")
  async createAssignedInstaller(
    @common.Body() data: AssignedInstallerCreateInput
  ): Promise<AssignedInstaller> {
    return await this.service.createAssignedInstaller({
      data: data,
      select: {
        createdAt: true,
        id: true,
        installer: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AssignedInstaller] })
  @ApiNestedQuery(AssignedInstallerFindManyArgs)
  @GrpcMethod("AssignedInstallerService", "assignedInstallers")
  async assignedInstallers(
    @common.Req() request: Request
  ): Promise<AssignedInstaller[]> {
    const args = plainToClass(AssignedInstallerFindManyArgs, request.query);
    return this.service.assignedInstallers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        installer: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AssignedInstaller })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AssignedInstallerService", "assignedInstaller")
  async assignedInstaller(
    @common.Param() params: AssignedInstallerWhereUniqueInput
  ): Promise<AssignedInstaller | null> {
    const result = await this.service.assignedInstaller({
      where: params,
      select: {
        createdAt: true,
        id: true,
        installer: true,
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
  @swagger.ApiOkResponse({ type: AssignedInstaller })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AssignedInstallerService", "updateAssignedInstaller")
  async updateAssignedInstaller(
    @common.Param() params: AssignedInstallerWhereUniqueInput,
    @common.Body() data: AssignedInstallerUpdateInput
  ): Promise<AssignedInstaller | null> {
    try {
      return await this.service.updateAssignedInstaller({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          installer: true,
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
  @swagger.ApiOkResponse({ type: AssignedInstaller })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AssignedInstallerService", "deleteAssignedInstaller")
  async deleteAssignedInstaller(
    @common.Param() params: AssignedInstallerWhereUniqueInput
  ): Promise<AssignedInstaller | null> {
    try {
      return await this.service.deleteAssignedInstaller({
        where: params,
        select: {
          createdAt: true,
          id: true,
          installer: true,
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
