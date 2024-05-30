import { Module } from "@nestjs/common";
import { OtherComponentModuleBase } from "./base/otherComponent.module.base";
import { OtherComponentService } from "./otherComponent.service";
import { OtherComponentController } from "./otherComponent.controller";
import { OtherComponentResolver } from "./otherComponent.resolver";

@Module({
  imports: [OtherComponentModuleBase],
  controllers: [OtherComponentController],
  providers: [OtherComponentService, OtherComponentResolver],
  exports: [OtherComponentService],
})
export class OtherComponentModule {}
