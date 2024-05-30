import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignedInstallerServiceBase } from "./base/assignedInstaller.service.base";

@Injectable()
export class AssignedInstallerService extends AssignedInstallerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
