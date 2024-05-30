import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BatteryServiceBase } from "./base/battery.service.base";

@Injectable()
export class BatteryService extends BatteryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
