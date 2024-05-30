import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RoleService } from "./role.service";
import { RoleGrpcControllerBase } from "./base/role.grpc.controller.base";

@swagger.ApiTags("roles")
@common.Controller("roles")
export class RoleGrpcController extends RoleGrpcControllerBase {
  constructor(protected readonly service: RoleService) {
    super(service);
  }
}
