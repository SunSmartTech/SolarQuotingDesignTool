import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrgSettingService } from "./orgSetting.service";
import { OrgSettingGrpcControllerBase } from "./base/orgSetting.grpc.controller.base";

@swagger.ApiTags("orgSettings")
@common.Controller("orgSettings")
export class OrgSettingGrpcController extends OrgSettingGrpcControllerBase {
  constructor(protected readonly service: OrgSettingService) {
    super(service);
  }
}
