import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactService } from "./contact.service";
import { ContactControllerBase } from "./base/contact.controller.base";

@swagger.ApiTags("contacts")
@common.Controller("contacts")
export class ContactController extends ContactControllerBase {
  constructor(protected readonly service: ContactService) {
    super(service);
  }
}
