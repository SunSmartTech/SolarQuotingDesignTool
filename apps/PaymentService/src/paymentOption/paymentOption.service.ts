import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaymentOptionServiceBase } from "./base/paymentOption.service.base";

@Injectable()
export class PaymentOptionService extends PaymentOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
