import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeamService } from "./team.service";
import { TeamGrpcControllerBase } from "./base/team.grpc.controller.base";

@swagger.ApiTags("teams")
@common.Controller("teams")
export class TeamGrpcController extends TeamGrpcControllerBase {
  constructor(protected readonly service: TeamService) {
    super(service);
  }
}
