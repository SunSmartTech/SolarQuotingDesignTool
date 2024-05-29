import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OtherComponentServiceBase } from "./base/otherComponent.service.base";

@Injectable()
export class OtherComponentService extends OtherComponentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
