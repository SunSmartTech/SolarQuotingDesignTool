import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignedContactService } from "./assignedContact.service";
import { AssignedContactGrpcControllerBase } from "./base/assignedContact.grpc.controller.base";

@swagger.ApiTags("assignedContacts")
@common.Controller("assignedContacts")
export class AssignedContactGrpcController extends AssignedContactGrpcControllerBase {
  constructor(protected readonly service: AssignedContactService) {
    super(service);
  }
}
