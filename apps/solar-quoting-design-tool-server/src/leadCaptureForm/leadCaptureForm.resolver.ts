import * as graphql from "@nestjs/graphql";
import { LeadCaptureFormResolverBase } from "./base/leadCaptureForm.resolver.base";
import { LeadCaptureForm } from "./base/LeadCaptureForm";
import { LeadCaptureFormService } from "./leadCaptureForm.service";

@graphql.Resolver(() => LeadCaptureForm)
export class LeadCaptureFormResolver extends LeadCaptureFormResolverBase {
  constructor(protected readonly service: LeadCaptureFormService) {
    super(service);
  }
}
