import { Module } from "@nestjs/common";
import { DocumentTemplateModuleBase } from "./base/documentTemplate.module.base";
import { DocumentTemplateService } from "./documentTemplate.service";
import { DocumentTemplateController } from "./documentTemplate.controller";
import { DocumentTemplateResolver } from "./documentTemplate.resolver";

@Module({
  imports: [DocumentTemplateModuleBase],
  controllers: [DocumentTemplateController],
  providers: [DocumentTemplateService, DocumentTemplateResolver],
  exports: [DocumentTemplateService],
})
export class DocumentTemplateModule {}
