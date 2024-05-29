import * as graphql from "@nestjs/graphql";
import { OrgSettingResolverBase } from "./base/orgSetting.resolver.base";
import { OrgSetting } from "./base/OrgSetting";
import { OrgSettingService } from "./orgSetting.service";

@graphql.Resolver(() => OrgSetting)
export class OrgSettingResolver extends OrgSettingResolverBase {
  constructor(protected readonly service: OrgSettingService) {
    super(service);
  }
}
