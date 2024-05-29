import { Module } from "@nestjs/common";
import { RoofTypeModuleBase } from "./base/roofType.module.base";
import { RoofTypeService } from "./roofType.service";
import { RoofTypeController } from "./roofType.controller";
import { RoofTypeResolver } from "./roofType.resolver";

@Module({
  imports: [RoofTypeModuleBase],
  controllers: [RoofTypeController],
  providers: [RoofTypeService, RoofTypeResolver],
  exports: [RoofTypeService],
})
export class RoofTypeModule {}
