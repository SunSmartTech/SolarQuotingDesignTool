import * as graphql from "@nestjs/graphql";
import { PublicFileResolverBase } from "./base/publicFile.resolver.base";
import { PublicFile } from "./base/PublicFile";
import { PublicFileService } from "./publicFile.service";

@graphql.Resolver(() => PublicFile)
export class PublicFileResolver extends PublicFileResolverBase {
  constructor(protected readonly service: PublicFileService) {
    super(service);
  }
}
