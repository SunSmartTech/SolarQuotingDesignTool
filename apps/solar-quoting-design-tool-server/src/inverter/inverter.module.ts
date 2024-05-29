import { Module } from "@nestjs/common";
import { InverterModuleBase } from "./base/inverter.module.base";
import { InverterService } from "./inverter.service";
import { InverterController } from "./inverter.controller";
import { InverterResolver } from "./inverter.resolver";

@Module({
  imports: [InverterModuleBase],
  controllers: [InverterController],
  providers: [InverterService, InverterResolver],
  exports: [InverterService],
})
export class InverterModule {}
