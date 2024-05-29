import * as graphql from "@nestjs/graphql";
import { EnvironmentVariablesService } from "./environmentvariables.service";

export class EnvironmentVariablesResolver {
  constructor(protected readonly service: EnvironmentVariablesService) {}
}
