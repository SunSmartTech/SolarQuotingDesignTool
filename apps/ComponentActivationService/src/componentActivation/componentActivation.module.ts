import { Module } from "@nestjs/common";
import { ComponentActivationModuleBase } from "./base/componentActivation.module.base";
import { ComponentActivationService } from "./componentActivation.service";
import { ComponentActivationController } from "./componentActivation.controller";
import { ComponentActivationResolver } from "./componentActivation.resolver";

@Module({
  imports: [ComponentActivationModuleBase],
  controllers: [ComponentActivationController],
  providers: [ComponentActivationService, ComponentActivationResolver],
  exports: [ComponentActivationService],
})
export class ComponentActivationModule {}
