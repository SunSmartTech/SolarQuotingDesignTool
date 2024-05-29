import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventService } from "./event.service";
import { EventControllerBase } from "./base/event.controller.base";

@swagger.ApiTags("events")
@common.Controller("events")
export class EventController extends EventControllerBase {
  constructor(protected readonly service: EventService) {
    super(service);
  }
}
