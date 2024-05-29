import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrgSettingServiceBase } from "./base/orgSetting.service.base";

@Injectable()
export class OrgSettingService extends OrgSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
