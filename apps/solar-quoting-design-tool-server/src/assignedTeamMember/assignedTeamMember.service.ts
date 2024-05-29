import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignedTeamMemberServiceBase } from "./base/assignedTeamMember.service.base";

@Injectable()
export class AssignedTeamMemberService extends AssignedTeamMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
