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
import { PrivateFileService } from "../privateFile.service";
import { PrivateFileCreateInput } from "./PrivateFileCreateInput";
import { PrivateFile } from "./PrivateFile";
import { PrivateFileFindManyArgs } from "./PrivateFileFindManyArgs";
import { PrivateFileWhereUniqueInput } from "./PrivateFileWhereUniqueInput";
import { PrivateFileUpdateInput } from "./PrivateFileUpdateInput";

export class PrivateFileControllerBase {
  constructor(protected readonly service: PrivateFileService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PrivateFile })
  async createPrivateFile(
    @common.Body() data: PrivateFileCreateInput
  ): Promise<PrivateFile> {
    return await this.service.createPrivateFile({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PrivateFile] })
  @ApiNestedQuery(PrivateFileFindManyArgs)
  async privateFiles(@common.Req() request: Request): Promise<PrivateFile[]> {
    const args = plainToClass(PrivateFileFindManyArgs, request.query);
    return this.service.privateFiles({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PrivateFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async privateFile(
    @common.Param() params: PrivateFileWhereUniqueInput
  ): Promise<PrivateFile | null> {
    const result = await this.service.privateFile({
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
  @swagger.ApiOkResponse({ type: PrivateFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePrivateFile(
    @common.Param() params: PrivateFileWhereUniqueInput,
    @common.Body() data: PrivateFileUpdateInput
  ): Promise<PrivateFile | null> {
    try {
      return await this.service.updatePrivateFile({
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
  @swagger.ApiOkResponse({ type: PrivateFile })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePrivateFile(
    @common.Param() params: PrivateFileWhereUniqueInput
  ): Promise<PrivateFile | null> {
    try {
      return await this.service.deletePrivateFile({
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