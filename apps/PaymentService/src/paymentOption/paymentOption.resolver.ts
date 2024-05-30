import * as graphql from "@nestjs/graphql";
import { PaymentOptionResolverBase } from "./base/paymentOption.resolver.base";
import { PaymentOption } from "./base/PaymentOption";
import { PaymentOptionService } from "./paymentOption.service";

@graphql.Resolver(() => PaymentOption)
export class PaymentOptionResolver extends PaymentOptionResolverBase {
  constructor(protected readonly service: PaymentOptionService) {
    super(service);
  }
}
