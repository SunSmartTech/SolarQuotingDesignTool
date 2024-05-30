import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserService } from "./user.service";
import { UserGrpcControllerBase } from "./base/user.grpc.controller.base";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserGrpcController extends UserGrpcControllerBase {
  constructor(protected readonly service: UserService) {
    super(service);
  }
}
