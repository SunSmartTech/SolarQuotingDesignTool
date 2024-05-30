import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactServiceBase } from "./base/contact.service.base";

@Injectable()
export class ContactService extends ContactServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
