import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SetbackServiceBase } from "./base/setback.service.base";

@Injectable()
export class SetbackService extends SetbackServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
