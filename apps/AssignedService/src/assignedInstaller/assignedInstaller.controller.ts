import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignedInstallerService } from "./assignedInstaller.service";
import { AssignedInstallerControllerBase } from "./base/assignedInstaller.controller.base";

@swagger.ApiTags("assignedInstallers")
@common.Controller("assignedInstallers")
export class AssignedInstallerController extends AssignedInstallerControllerBase {
  constructor(protected readonly service: AssignedInstallerService) {
    super(service);
  }
}
