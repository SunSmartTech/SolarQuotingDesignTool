import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DesignSettingServiceBase } from "./base/designSetting.service.base";

@Injectable()
export class DesignSettingService extends DesignSettingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
