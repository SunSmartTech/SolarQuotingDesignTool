import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemServiceBase } from "./base/system.service.base";

@Injectable()
export class SystemService extends SystemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
