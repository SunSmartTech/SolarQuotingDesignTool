import * as graphql from "@nestjs/graphql";
import { DocumentTemplateResolverBase } from "./base/documentTemplate.resolver.base";
import { DocumentTemplate } from "./base/DocumentTemplate";
import { DocumentTemplateService } from "./documentTemplate.service";

@graphql.Resolver(() => DocumentTemplate)
export class DocumentTemplateResolver extends DocumentTemplateResolverBase {
  constructor(protected readonly service: DocumentTemplateService) {
    super(service);
  }
}
