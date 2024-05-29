import { Module } from "@nestjs/common";
import { CostingModuleBase } from "./base/costing.module.base";
import { CostingService } from "./costing.service";
import { CostingController } from "./costing.controller";
import { CostingResolver } from "./costing.resolver";

@Module({
  imports: [CostingModuleBase],
  controllers: [CostingController],
  providers: [CostingService, CostingResolver],
  exports: [CostingService],
})
export class CostingModule {}
