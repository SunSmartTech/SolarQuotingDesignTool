import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ModuleModelServiceBase } from "./base/moduleModel.service.base";

@Injectable()
export class ModuleModelService extends ModuleModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
