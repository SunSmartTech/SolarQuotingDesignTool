import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocumentTemplateService } from "./documentTemplate.service";
import { DocumentTemplateControllerBase } from "./base/documentTemplate.controller.base";

@swagger.ApiTags("documentTemplates")
@common.Controller("documentTemplates")
export class DocumentTemplateController extends DocumentTemplateControllerBase {
  constructor(protected readonly service: DocumentTemplateService) {
    super(service);
  }
}
