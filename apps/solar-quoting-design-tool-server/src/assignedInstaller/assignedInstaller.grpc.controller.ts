import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssignedInstallerService } from "./assignedInstaller.service";
import { AssignedInstallerGrpcControllerBase } from "./base/assignedInstaller.grpc.controller.base";

@swagger.ApiTags("assignedInstallers")
@common.Controller("assignedInstallers")
export class AssignedInstallerGrpcController extends AssignedInstallerGrpcControllerBase {
  constructor(protected readonly service: AssignedInstallerService) {
    super(service);
  }
}
