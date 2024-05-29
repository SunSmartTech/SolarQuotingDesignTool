import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrgServiceBase } from "./base/org.service.base";

@Injectable()
export class OrgService extends OrgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
