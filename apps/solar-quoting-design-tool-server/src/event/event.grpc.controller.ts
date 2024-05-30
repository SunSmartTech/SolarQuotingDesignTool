import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventService } from "./event.service";
import { EventGrpcControllerBase } from "./base/event.grpc.controller.base";

@swagger.ApiTags("events")
@common.Controller("events")
export class EventGrpcController extends EventGrpcControllerBase {
  constructor(protected readonly service: EventService) {
    super(service);
  }
}
