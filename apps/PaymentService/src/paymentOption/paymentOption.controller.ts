import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentOptionService } from "./paymentOption.service";
import { PaymentOptionControllerBase } from "./base/paymentOption.controller.base";

@swagger.ApiTags("paymentOptions")
@common.Controller("paymentOptions")
export class PaymentOptionController extends PaymentOptionControllerBase {
  constructor(protected readonly service: PaymentOptionService) {
    super(service);
  }
}
