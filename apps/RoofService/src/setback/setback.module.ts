import { Module } from "@nestjs/common";
import { SetbackModuleBase } from "./base/setback.module.base";
import { SetbackService } from "./setback.service";
import { SetbackController } from "./setback.controller";
import { SetbackResolver } from "./setback.resolver";

@Module({
  imports: [SetbackModuleBase],
  controllers: [SetbackController],
  providers: [SetbackService, SetbackResolver],
  exports: [SetbackService],
})
export class SetbackModule {}
