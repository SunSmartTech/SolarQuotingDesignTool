import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RoofTypeServiceBase } from "./base/roofType.service.base";

@Injectable()
export class RoofTypeService extends RoofTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
