import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventTypeService } from "./eventType.service";
import { EventTypeGrpcControllerBase } from "./base/eventType.grpc.controller.base";

@swagger.ApiTags("eventTypes")
@common.Controller("eventTypes")
export class EventTypeGrpcController extends EventTypeGrpcControllerBase {
  constructor(protected readonly service: EventTypeService) {
    super(service);
  }
}
