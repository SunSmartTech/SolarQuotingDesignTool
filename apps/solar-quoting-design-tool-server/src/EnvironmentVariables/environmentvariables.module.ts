import { Module } from "@nestjs/common";
import { EnvironmentVariablesService } from "./environmentvariables.service";
import { EnvironmentVariablesController } from "./environmentvariables.controller";
import { EnvironmentVariablesResolver } from "./environmentvariables.resolver";

@Module({
  controllers: [EnvironmentVariablesController],
  providers: [EnvironmentVariablesService, EnvironmentVariablesResolver],
  exports: [EnvironmentVariablesService],
})
export class EnvironmentVariablesModule {}
