/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DocumentTemplate } from "./DocumentTemplate";
import { DocumentTemplateCountArgs } from "./DocumentTemplateCountArgs";
import { DocumentTemplateFindManyArgs } from "./DocumentTemplateFindManyArgs";
import { DocumentTemplateFindUniqueArgs } from "./DocumentTemplateFindUniqueArgs";
import { DeleteDocumentTemplateArgs } from "./DeleteDocumentTemplateArgs";
import { DocumentTemplateService } from "../documentTemplate.service";
@graphql.Resolver(() => DocumentTemplate)
export class DocumentTemplateResolverBase {
  constructor(protected readonly service: DocumentTemplateService) {}

  async _documentTemplatesMeta(
    @graphql.Args() args: DocumentTemplateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DocumentTemplate])
  async documentTemplates(
    @graphql.Args() args: DocumentTemplateFindManyArgs
  ): Promise<DocumentTemplate[]> {
    return this.service.documentTemplates(args);
  }

  @graphql.Query(() => DocumentTemplate, { nullable: true })
  async documentTemplate(
    @graphql.Args() args: DocumentTemplateFindUniqueArgs
  ): Promise<DocumentTemplate | null> {
    const result = await this.service.documentTemplate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DocumentTemplate)
  async deleteDocumentTemplate(
    @graphql.Args() args: DeleteDocumentTemplateArgs
  ): Promise<DocumentTemplate | null> {
    try {
      return await this.service.deleteDocumentTemplate(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}