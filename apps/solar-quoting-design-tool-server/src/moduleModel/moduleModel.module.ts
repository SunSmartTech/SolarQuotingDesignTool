import { Module } from "@nestjs/common";
import { ModuleModelModuleBase } from "./base/moduleModel.module.base";
import { ModuleModelService } from "./moduleModel.service";
import { ModuleModelController } from "./moduleModel.controller";
import { ModuleModelResolver } from "./moduleModel.resolver";

@Module({
  imports: [ModuleModelModuleBase],
  controllers: [ModuleModelController],
  providers: [ModuleModelService, ModuleModelResolver],
  exports: [ModuleModelService],
})
export class ModuleModelModule {}
