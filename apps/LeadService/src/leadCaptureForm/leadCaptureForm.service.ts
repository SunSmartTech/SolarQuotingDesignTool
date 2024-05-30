import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeadCaptureFormServiceBase } from "./base/leadCaptureForm.service.base";

@Injectable()
export class LeadCaptureFormService extends LeadCaptureFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
