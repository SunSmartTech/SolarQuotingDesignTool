import { Module } from "@nestjs/common";
import { IncentiveModuleBase } from "./base/incentive.module.base";
import { IncentiveService } from "./incentive.service";
import { IncentiveController } from "./incentive.controller";
import { IncentiveResolver } from "./incentive.resolver";

@Module({
  imports: [IncentiveModuleBase],
  controllers: [IncentiveController],
  providers: [IncentiveService, IncentiveResolver],
  exports: [IncentiveService],
})
export class IncentiveModule {}
