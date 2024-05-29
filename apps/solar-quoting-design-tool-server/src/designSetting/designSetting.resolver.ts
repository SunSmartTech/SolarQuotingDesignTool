import * as graphql from "@nestjs/graphql";
import { DesignSettingResolverBase } from "./base/designSetting.resolver.base";
import { DesignSetting } from "./base/DesignSetting";
import { DesignSettingService } from "./designSetting.service";

@graphql.Resolver(() => DesignSetting)
export class DesignSettingResolver extends DesignSettingResolverBase {
  constructor(protected readonly service: DesignSettingService) {
    super(service);
  }
}
