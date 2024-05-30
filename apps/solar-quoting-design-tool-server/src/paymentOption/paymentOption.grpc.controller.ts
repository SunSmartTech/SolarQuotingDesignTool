import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentOptionService } from "./paymentOption.service";
import { PaymentOptionGrpcControllerBase } from "./base/paymentOption.grpc.controller.base";

@swagger.ApiTags("paymentOptions")
@common.Controller("paymentOptions")
export class PaymentOptionGrpcController extends PaymentOptionGrpcControllerBase {
  constructor(protected readonly service: PaymentOptionService) {
    super(service);
  }
}
