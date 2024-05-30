import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UtilityTariffServiceBase } from "./base/utilityTariff.service.base";

@Injectable()
export class UtilityTariffService extends UtilityTariffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
