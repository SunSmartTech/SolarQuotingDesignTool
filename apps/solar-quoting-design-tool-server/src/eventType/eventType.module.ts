import { Module } from "@nestjs/common";
import { EventTypeModuleBase } from "./base/eventType.module.base";
import { EventTypeService } from "./eventType.service";
import { EventTypeController } from "./eventType.controller";
import { EventTypeResolver } from "./eventType.resolver";

@Module({
  imports: [EventTypeModuleBase],
  controllers: [EventTypeController],
  providers: [EventTypeService, EventTypeResolver],
  exports: [EventTypeService],
})
export class EventTypeModule {}
