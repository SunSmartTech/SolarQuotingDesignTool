import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComponentActivationServiceBase } from "./base/componentActivation.service.base";

@Injectable()
export class ComponentActivationService extends ComponentActivationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
