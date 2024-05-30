import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DesignSettingService } from "./designSetting.service";
import { DesignSettingGrpcControllerBase } from "./base/designSetting.grpc.controller.base";

@swagger.ApiTags("designSettings")
@common.Controller("designSettings")
export class DesignSettingGrpcController extends DesignSettingGrpcControllerBase {
  constructor(protected readonly service: DesignSettingService) {
    super(service);
  }
}
