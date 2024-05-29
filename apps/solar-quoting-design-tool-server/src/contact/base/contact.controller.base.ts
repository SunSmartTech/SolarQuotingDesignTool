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
import { ContactService } from "../contact.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ContactCreateInput } from "./ContactCreateInput";
import { Contact } from "./Contact";
import { ContactFindManyArgs } from "./ContactFindManyArgs";
import { ContactWhereUniqueInput } from "./ContactWhereUniqueInput";
import { ContactUpdateInput } from "./ContactUpdateInput";
import { AssignedContactFindManyArgs } from "../../assignedContact/base/AssignedContactFindManyArgs";
import { AssignedContact } from "../../assignedContact/base/AssignedContact";
import { AssignedContactWhereUniqueInput } from "../../assignedContact/base/AssignedContactWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ContactControllerBase {
  constructor(
    protected readonly service: ContactService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Contact })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createContact(
    @common.Body() data: ContactCreateInput
  ): Promise<Contact> {
    return await this.service.createContact({
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
  @swagger.ApiOkResponse({ type: [Contact] })
  @ApiNestedQuery(ContactFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contacts(@common.Req() request: Request): Promise<Contact[]> {
    const args = plainToClass(ContactFindManyArgs, request.query);
    return this.service.contacts({
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
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async contact(
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Contact | null> {
    const result = await this.service.contact({
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
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateContact(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() data: ContactUpdateInput
  ): Promise<Contact | null> {
    try {
      return await this.service.updateContact({
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
  @swagger.ApiOkResponse({ type: Contact })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteContact(
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<Contact | null> {
    try {
      return await this.service.deleteContact({
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/assignedContacts")
  @ApiNestedQuery(AssignedContactFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AssignedContact",
    action: "read",
    possession: "any",
  })
  async findAssignedContacts(
    @common.Req() request: Request,
    @common.Param() params: ContactWhereUniqueInput
  ): Promise<AssignedContact[]> {
    const query = plainToClass(AssignedContactFindManyArgs, request.query);
    const results = await this.service.findAssignedContacts(params.id, {
      ...query,
      select: {
        contact: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
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

  @common.Post("/:id/assignedContacts")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async connectAssignedContacts(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: AssignedContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      assignedContacts: {
        connect: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/assignedContacts")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async updateAssignedContacts(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: AssignedContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      assignedContacts: {
        set: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/assignedContacts")
  @nestAccessControl.UseRoles({
    resource: "Contact",
    action: "update",
    possession: "any",
  })
  async disconnectAssignedContacts(
    @common.Param() params: ContactWhereUniqueInput,
    @common.Body() body: AssignedContactWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      assignedContacts: {
        disconnect: body,
      },
    };
    await this.service.updateContact({
      where: params,
      data,
      select: { id: true },
    });
  }
}
