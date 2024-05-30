import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactService } from "./contact.service";
import { ContactGrpcControllerBase } from "./base/contact.grpc.controller.base";

@swagger.ApiTags("contacts")
@common.Controller("contacts")
export class ContactGrpcController extends ContactGrpcControllerBase {
  constructor(protected readonly service: ContactService) {
    super(service);
  }
}
