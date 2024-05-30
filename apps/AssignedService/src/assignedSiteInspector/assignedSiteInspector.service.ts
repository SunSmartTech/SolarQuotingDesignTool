import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignedSiteInspectorServiceBase } from "./base/assignedSiteInspector.service.base";

@Injectable()
export class AssignedSiteInspectorService extends AssignedSiteInspectorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
