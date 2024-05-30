import { Module } from "@nestjs/common";
import { PublicFileModuleBase } from "./base/publicFile.module.base";
import { PublicFileService } from "./publicFile.service";
import { PublicFileController } from "./publicFile.controller";
import { PublicFileResolver } from "./publicFile.resolver";

@Module({
  imports: [PublicFileModuleBase],
  controllers: [PublicFileController],
  providers: [PublicFileService, PublicFileResolver],
  exports: [PublicFileService],
})
export class PublicFileModule {}
