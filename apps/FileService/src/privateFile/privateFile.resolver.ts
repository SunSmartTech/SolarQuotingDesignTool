import * as graphql from "@nestjs/graphql";
import { PrivateFileResolverBase } from "./base/privateFile.resolver.base";
import { PrivateFile } from "./base/PrivateFile";
import { PrivateFileService } from "./privateFile.service";

@graphql.Resolver(() => PrivateFile)
export class PrivateFileResolver extends PrivateFileResolverBase {
  constructor(protected readonly service: PrivateFileService) {
    super(service);
  }
}
