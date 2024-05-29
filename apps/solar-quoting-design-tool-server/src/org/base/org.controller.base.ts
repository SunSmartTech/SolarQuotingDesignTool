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
import { OrgService } from "../org.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { OrgCreateInput } from "./OrgCreateInput";
import { Org } from "./Org";
import { OrgFindManyArgs } from "./OrgFindManyArgs";
import { OrgWhereUniqueInput } from "./OrgWhereUniqueInput";
import { OrgUpdateInput } from "./OrgUpdateInput";
import { ProjectFindManyArgs } from "../../project/base/ProjectFindManyArgs";
import { Project } from "../../project/base/Project";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrgControllerBase {
  constructor(
    protected readonly service: OrgService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Org })
  @nestAccessControl.UseRoles({
    resource: "Org",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createOrg(@common.Body() data: OrgCreateInput): Promise<Org> {
    return await this.service.createOrg({
      data: data,
      select: {
        createdAt: true,
        customerData: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Org] })
  @ApiNestedQuery(OrgFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Org",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async orgs(@common.Req() request: Request): Promise<Org[]> {
    const args = plainToClass(OrgFindManyArgs, request.query);
    return this.service.orgs({
      ...args,
      select: {
        createdAt: true,
        customerData: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Org })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Org",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async org(@common.Param() params: OrgWhereUniqueInput): Promise<Org | null> {
    const result = await this.service.org({
      where: params,
      select: {
        createdAt: true,
        customerData: true,
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Org })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Org",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateOrg(
    @common.Param() params: OrgWhereUniqueInput,
    @common.Body() data: OrgUpdateInput
  ): Promise<Org | null> {
    try {
      return await this.service.updateOrg({
        where: params,
        data: data,
        select: {
          createdAt: true,
          customerData: true,
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
  @swagger.ApiOkResponse({ type: Org })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Org",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteOrg(
    @common.Param() params: OrgWhereUniqueInput
  ): Promise<Org | null> {
    try {
      return await this.service.deleteOrg({
        where: params,
        select: {
          createdAt: true,
          customerData: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/projects")
  @ApiNestedQuery(ProjectFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Project",
    action: "read",
    possession: "any",
  })
  async findProjects(
    @common.Req() request: Request,
    @common.Param() params: OrgWhereUniqueInput
  ): Promise<Project[]> {
    const query = plainToClass(ProjectFindManyArgs, request.query);
    const results = await this.service.findProjects(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        org: {
          select: {
            id: true,
          },
        },

        projectName: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/projects")
  @nestAccessControl.UseRoles({
    resource: "Org",
    action: "update",
    possession: "any",
  })
  async connectProjects(
    @common.Param() params: OrgWhereUniqueInput,
    @common.Body() body: ProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projects: {
        connect: body,
      },
    };
    await this.service.updateOrg({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/projects")
  @nestAccessControl.UseRoles({
    resource: "Org",
    action: "update",
    possession: "any",
  })
  async updateProjects(
    @common.Param() params: OrgWhereUniqueInput,
    @common.Body() body: ProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projects: {
        set: body,
      },
    };
    await this.service.updateOrg({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/projects")
  @nestAccessControl.UseRoles({
    resource: "Org",
    action: "update",
    possession: "any",
  })
  async disconnectProjects(
    @common.Param() params: OrgWhereUniqueInput,
    @common.Body() body: ProjectWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      projects: {
        disconnect: body,
      },
    };
    await this.service.updateOrg({
      where: params,
      data,
      select: { id: true },
    });
  }
}
