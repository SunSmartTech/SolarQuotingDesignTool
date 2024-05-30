import { Module } from "@nestjs/common";
import { PrivateFileModuleBase } from "./base/privateFile.module.base";
import { PrivateFileService } from "./privateFile.service";
import { PrivateFileController } from "./privateFile.controller";
import { PrivateFileResolver } from "./privateFile.resolver";

@Module({
  imports: [PrivateFileModuleBase],
  controllers: [PrivateFileController],
  providers: [PrivateFileService, PrivateFileResolver],
  exports: [PrivateFileService],
})
export class PrivateFileModule {}
