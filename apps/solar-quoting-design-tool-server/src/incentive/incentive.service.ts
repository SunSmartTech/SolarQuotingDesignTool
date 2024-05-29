import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncentiveServiceBase } from "./base/incentive.service.base";

@Injectable()
export class IncentiveService extends IncentiveServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
