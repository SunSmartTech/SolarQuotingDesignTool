import { Module } from "@nestjs/common";
import { PaymentOptionModuleBase } from "./base/paymentOption.module.base";
import { PaymentOptionService } from "./paymentOption.service";
import { PaymentOptionController } from "./paymentOption.controller";
import { PaymentOptionResolver } from "./paymentOption.resolver";

@Module({
  imports: [PaymentOptionModuleBase],
  controllers: [PaymentOptionController],
  providers: [PaymentOptionService, PaymentOptionResolver],
  exports: [PaymentOptionService],
})
export class PaymentOptionModule {}
