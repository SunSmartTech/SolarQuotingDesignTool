import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DesignSettingService } from "./designSetting.service";
import { DesignSettingControllerBase } from "./base/designSetting.controller.base";

@swagger.ApiTags("designSettings")
@common.Controller("designSettings")
export class DesignSettingController extends DesignSettingControllerBase {
  constructor(protected readonly service: DesignSettingService) {
    super(service);
  }
}
