import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventTypeService } from "./eventType.service";
import { EventTypeControllerBase } from "./base/eventType.controller.base";

@swagger.ApiTags("eventTypes")
@common.Controller("eventTypes")
export class EventTypeController extends EventTypeControllerBase {
  constructor(protected readonly service: EventTypeService) {
    super(service);
  }
}
