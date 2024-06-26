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
import { UtilityTariffService } from "../utilityTariff.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UtilityTariffCreateInput } from "./UtilityTariffCreateInput";
import { UtilityTariff } from "./UtilityTariff";
import { UtilityTariffFindManyArgs } from "./UtilityTariffFindManyArgs";
import { UtilityTariffWhereUniqueInput } from "./UtilityTariffWhereUniqueInput";
import { UtilityTariffUpdateInput } from "./UtilityTariffUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UtilityTariffControllerBase {
  constructor(
    protected readonly service: UtilityTariffService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UtilityTariff })
  @nestAccessControl.UseRoles({
    resource: "UtilityTariff",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UtilityTariffCreateInput,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [UtilityTariff] })
  @ApiNestedQuery(UtilityTariffFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UtilityTariff",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UtilityTariff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UtilityTariff",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UtilityTariff })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "UtilityTariff",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: UtilityTariffUpdateInput,
  })
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
  @nestAccessControl.UseRoles({
    resource: "UtilityTariff",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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
