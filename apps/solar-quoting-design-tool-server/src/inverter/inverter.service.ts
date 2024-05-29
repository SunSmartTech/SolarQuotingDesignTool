import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InverterServiceBase } from "./base/inverter.service.base";

@Injectable()
export class InverterService extends InverterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
