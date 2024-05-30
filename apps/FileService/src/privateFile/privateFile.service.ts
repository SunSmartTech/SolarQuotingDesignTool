import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrivateFileServiceBase } from "./base/privateFile.service.base";

@Injectable()
export class PrivateFileService extends PrivateFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
