import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { EnvironmentVariablesService } from "./environmentvariables.service";

@swagger.ApiTags("environmentVariables")
@common.Controller("environmentVariables")
export class EnvironmentVariablesController {
  constructor(protected readonly service: EnvironmentVariablesService) {}
}
