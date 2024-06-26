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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AssignedSiteInspectorService } from "../assignedSiteInspector.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AssignedSiteInspectorCreateInput } from "./AssignedSiteInspectorCreateInput";
import { AssignedSiteInspector } from "./AssignedSiteInspector";
import { AssignedSiteInspectorFindManyArgs } from "./AssignedSiteInspectorFindManyArgs";
import { AssignedSiteInspectorWhereUniqueInput } from "./AssignedSiteInspectorWhereUniqueInput";
import { AssignedSiteInspectorUpdateInput } from "./AssignedSiteInspectorUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AssignedSiteInspectorControllerBase {
  constructor(
    protected readonly service: AssignedSiteInspectorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AssignedSiteInspector })
  @nestAccessControl.UseRoles({
    resource: "AssignedSiteInspector",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AssignedSiteInspectorCreateInput,
  })
  async createAssignedSiteInspector(
    @common.Body() data: AssignedSiteInspectorCreateInput
  ): Promise<AssignedSiteInspector> {
    return await this.service.createAssignedSiteInspector({
      data: data,
      select: {
        createdAt: true,
        id: true,
        siteInspector: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AssignedSiteInspector] })
  @ApiNestedQuery(AssignedSiteInspectorFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AssignedSiteInspector",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async assignedSiteInspectors(
    @common.Req() request: Request
  ): Promise<AssignedSiteInspector[]> {
    const args = plainToClass(AssignedSiteInspectorFindManyArgs, request.query);
    return this.service.assignedSiteInspectors({
      ...args,
      select: {
        createdAt: true,
        id: true,
        siteInspector: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AssignedSiteInspector })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AssignedSiteInspector",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async assignedSiteInspector(
    @common.Param() params: AssignedSiteInspectorWhereUniqueInput
  ): Promise<AssignedSiteInspector | null> {
    const result = await this.service.assignedSiteInspector({
      where: params,
      select: {
        createdAt: true,
        id: true,
        siteInspector: true,
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AssignedSiteInspector })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AssignedSiteInspector",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AssignedSiteInspectorUpdateInput,
  })
  async updateAssignedSiteInspector(
    @common.Param() params: AssignedSiteInspectorWhereUniqueInput,
    @common.Body() data: AssignedSiteInspectorUpdateInput
  ): Promise<AssignedSiteInspector | null> {
    try {
      return await this.service.updateAssignedSiteInspector({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          siteInspector: true,
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
  @swagger.ApiOkResponse({ type: AssignedSiteInspector })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AssignedSiteInspector",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAssignedSiteInspector(
    @common.Param() params: AssignedSiteInspectorWhereUniqueInput
  ): Promise<AssignedSiteInspector | null> {
    try {
      return await this.service.deleteAssignedSiteInspector({
        where: params,
        select: {
          createdAt: true,
          id: true,
          siteInspector: true,
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
