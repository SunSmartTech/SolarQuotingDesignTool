import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CostingServiceBase } from "./base/costing.service.base";

@Injectable()
export class CostingService extends CostingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
