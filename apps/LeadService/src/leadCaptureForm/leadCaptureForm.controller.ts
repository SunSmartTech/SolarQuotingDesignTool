import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadCaptureFormService } from "./leadCaptureForm.service";
import { LeadCaptureFormControllerBase } from "./base/leadCaptureForm.controller.base";

@swagger.ApiTags("leadCaptureForms")
@common.Controller("leadCaptureForms")
export class LeadCaptureFormController extends LeadCaptureFormControllerBase {
  constructor(protected readonly service: LeadCaptureFormService) {
    super(service);
  }
}
