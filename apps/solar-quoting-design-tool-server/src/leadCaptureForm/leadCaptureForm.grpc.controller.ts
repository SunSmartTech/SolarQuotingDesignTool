import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadCaptureFormService } from "./leadCaptureForm.service";
import { LeadCaptureFormGrpcControllerBase } from "./base/leadCaptureForm.grpc.controller.base";

@swagger.ApiTags("leadCaptureForms")
@common.Controller("leadCaptureForms")
export class LeadCaptureFormGrpcController extends LeadCaptureFormGrpcControllerBase {
  constructor(protected readonly service: LeadCaptureFormService) {
    super(service);
  }
}
