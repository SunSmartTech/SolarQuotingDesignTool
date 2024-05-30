import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocumentTemplateService } from "./documentTemplate.service";
import { DocumentTemplateGrpcControllerBase } from "./base/documentTemplate.grpc.controller.base";

@swagger.ApiTags("documentTemplates")
@common.Controller("documentTemplates")
export class DocumentTemplateGrpcController extends DocumentTemplateGrpcControllerBase {
  constructor(protected readonly service: DocumentTemplateService) {
    super(service);
  }
}
