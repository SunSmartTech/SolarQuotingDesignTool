import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PublicFileServiceBase } from "./base/publicFile.service.base";

@Injectable()
export class PublicFileService extends PublicFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
