import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentTemplateServiceBase } from "./base/documentTemplate.service.base";

@Injectable()
export class DocumentTemplateService extends DocumentTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
