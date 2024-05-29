import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PricingSchemeServiceBase } from "./base/pricingScheme.service.base";

@Injectable()
export class PricingSchemeService extends PricingSchemeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
