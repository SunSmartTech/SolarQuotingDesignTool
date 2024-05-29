import { Module } from "@nestjs/common";
import { SystemModuleBase } from "./base/system.module.base";
import { SystemService } from "./system.service";
import { SystemController } from "./system.controller";
import { SystemResolver } from "./system.resolver";

@Module({
  imports: [SystemModuleBase],
  controllers: [SystemController],
  providers: [SystemService, SystemResolver],
  exports: [SystemService],
})
export class SystemModule {}
