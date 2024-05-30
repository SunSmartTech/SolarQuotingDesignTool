import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignedContactService } from "./assignedContact.service";
import { AssignedContactControllerBase } from "./base/assignedContact.controller.base";

@swagger.ApiTags("assignedContacts")
@common.Controller("assignedContacts")
export class AssignedContactController extends AssignedContactControllerBase {
  constructor(protected readonly service: AssignedContactService) {
    super(service);
  }
}
