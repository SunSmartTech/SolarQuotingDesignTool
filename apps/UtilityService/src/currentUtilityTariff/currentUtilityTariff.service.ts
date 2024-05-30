import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CurrentUtilityTariffServiceBase } from "./base/currentUtilityTariff.service.base";

@Injectable()
export class CurrentUtilityTariffService extends CurrentUtilityTariffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
