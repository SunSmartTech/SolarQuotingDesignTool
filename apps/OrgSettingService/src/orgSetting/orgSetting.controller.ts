import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrgSettingService } from "./orgSetting.service";
import { OrgSettingControllerBase } from "./base/orgSetting.controller.base";

@swagger.ApiTags("orgSettings")
@common.Controller("orgSettings")
export class OrgSettingController extends OrgSettingControllerBase {
  constructor(protected readonly service: OrgSettingService) {
    super(service);
  }
}
