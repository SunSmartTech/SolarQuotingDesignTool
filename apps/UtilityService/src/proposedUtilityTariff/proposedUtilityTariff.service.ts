import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProposedUtilityTariffServiceBase } from "./base/proposedUtilityTariff.service.base";

@Injectable()
export class ProposedUtilityTariffService extends ProposedUtilityTariffServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
