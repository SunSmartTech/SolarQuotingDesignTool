import { Module } from "@nestjs/common";
import { ContactModuleBase } from "./base/contact.module.base";
import { ContactService } from "./contact.service";
import { ContactController } from "./contact.controller";
import { ContactResolver } from "./contact.resolver";

@Module({
  imports: [ContactModuleBase],
  controllers: [ContactController],
  providers: [ContactService, ContactResolver],
  exports: [ContactService],
})
export class ContactModule {}
