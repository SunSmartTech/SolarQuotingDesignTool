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
import { AssignedTeamMemberService } from "../assignedTeamMember.service";
import { AssignedTeamMemberCreateInput } from "./AssignedTeamMemberCreateInput";
import { AssignedTeamMember } from "./AssignedTeamMember";
import { AssignedTeamMemberFindManyArgs } from "./AssignedTeamMemberFindManyArgs";
import { AssignedTeamMemberWhereUniqueInput } from "./AssignedTeamMemberWhereUniqueInput";
import { AssignedTeamMemberUpdateInput } from "./AssignedTeamMemberUpdateInput";

export class AssignedTeamMemberControllerBase {
  constructor(protected readonly service: AssignedTeamMemberService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AssignedTeamMember })
  async createAssignedTeamMember(
    @common.Body() data: AssignedTeamMemberCreateInput
  ): Promise<AssignedTeamMember> {
    return await this.service.createAssignedTeamMember({
      data: data,
      select: {
        createdAt: true,
        id: true,
        teamMember: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AssignedTeamMember] })
  @ApiNestedQuery(AssignedTeamMemberFindManyArgs)
  async assignedTeamMembers(
    @common.Req() request: Request
  ): Promise<AssignedTeamMember[]> {
    const args = plainToClass(AssignedTeamMemberFindManyArgs, request.query);
    return this.service.assignedTeamMembers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        teamMember: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AssignedTeamMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async assignedTeamMember(
    @common.Param() params: AssignedTeamMemberWhereUniqueInput
  ): Promise<AssignedTeamMember | null> {
    const result = await this.service.assignedTeamMember({
      where: params,
      select: {
        createdAt: true,
        id: true,
        teamMember: true,
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
  @swagger.ApiOkResponse({ type: AssignedTeamMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAssignedTeamMember(
    @common.Param() params: AssignedTeamMemberWhereUniqueInput,
    @common.Body() data: AssignedTeamMemberUpdateInput
  ): Promise<AssignedTeamMember | null> {
    try {
      return await this.service.updateAssignedTeamMember({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          teamMember: true,
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
  @swagger.ApiOkResponse({ type: AssignedTeamMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAssignedTeamMember(
    @common.Param() params: AssignedTeamMemberWhereUniqueInput
  ): Promise<AssignedTeamMember | null> {
    try {
      return await this.service.deleteAssignedTeamMember({
        where: params,
        select: {
          createdAt: true,
          id: true,
          teamMember: true,
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
