import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventTypeServiceBase } from "./base/eventType.service.base";

@Injectable()
export class EventTypeService extends EventTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
