import { Module } from "@nestjs/common";
import { AssignedContactModuleBase } from "./base/assignedContact.module.base";
import { AssignedContactService } from "./assignedContact.service";
import { AssignedContactController } from "./assignedContact.controller";
import { AssignedContactResolver } from "./assignedContact.resolver";

@Module({
  imports: [AssignedContactModuleBase],
  controllers: [AssignedContactController],
  providers: [AssignedContactService, AssignedContactResolver],
  exports: [AssignedContactService],
})
export class AssignedContactModule {}
