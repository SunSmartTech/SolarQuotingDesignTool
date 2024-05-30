import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignedContactServiceBase } from "./base/assignedContact.service.base";

@Injectable()
export class AssignedContactService extends AssignedContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
