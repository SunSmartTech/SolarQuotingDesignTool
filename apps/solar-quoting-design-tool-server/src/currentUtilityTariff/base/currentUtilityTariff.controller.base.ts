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
import { CurrentUtilityTariffService } from "../currentUtilityTariff.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CurrentUtilityTariffCreateInput } from "./CurrentUtilityTariffCreateInput";
import { CurrentUtilityTariff } from "./CurrentUtilityTariff";
import { CurrentUtilityTariffFindManyArgs } from "./CurrentUtilityTariffFindManyArgs";
import { CurrentUtilityTariffWhereUniqueInput } from "./CurrentUtilityTariffWhereUniqueInput";
import { CurrentUtilityTariffUpdateInput } from "./CurrentUtilityTariffUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CurrentUtilityTariffControllerBase {
  constructor(
    protected readonly service: CurrentUtilityTariffService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CurrentUtilityTariff })
  @nestAccessControl.UseRoles({
    resource: "CurrentUtilityTariff",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createCurrentUtilityTariff(
    @common.Body() data: CurrentUtilityTariffCreateInput
  ): Promise<CurrentUtilityTariff> {
    return await this.service.createCurrentUtilityTariff({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [CurrentUtilityTariff] })
  @ApiNestedQuery(CurrentUtilityTariffFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CurrentUtilityTariff",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async currentUtilityTariffs(
    @common.Req() request: Request
  ): Promise<CurrentUtilityTariff[]> {
    const args = plainToClass(CurrentUtilityTariffFindManyArgs, request.query);
    return this.service.currentUtilityTariffs({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CurrentUtilityTariff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CurrentUtilityTariff",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async currentUtilityTariff(
    @common.Param() params: CurrentUtilityTariffWhereUniqueInput
  ): Promise<CurrentUtilityTariff | null> {
    const result = await this.service.currentUtilityTariff({
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CurrentUtilityTariff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CurrentUtilityTariff",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateCurrentUtilityTariff(
    @common.Param() params: CurrentUtilityTariffWhereUniqueInput,
    @common.Body() data: CurrentUtilityTariffUpdateInput
  ): Promise<CurrentUtilityTariff | null> {
    try {
      return await this.service.updateCurrentUtilityTariff({
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
  @swagger.ApiOkResponse({ type: CurrentUtilityTariff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CurrentUtilityTariff",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCurrentUtilityTariff(
    @common.Param() params: CurrentUtilityTariffWhereUniqueInput
  ): Promise<CurrentUtilityTariff | null> {
    try {
      return await this.service.deleteCurrentUtilityTariff({
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
