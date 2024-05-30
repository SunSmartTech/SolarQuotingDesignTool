import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectService } from "./project.service";
import { ProjectGrpcControllerBase } from "./base/project.grpc.controller.base";

@swagger.ApiTags("projects")
@common.Controller("projects")
export class ProjectGrpcController extends ProjectGrpcControllerBase {
  constructor(protected readonly service: ProjectService) {
    super(service);
  }
}
