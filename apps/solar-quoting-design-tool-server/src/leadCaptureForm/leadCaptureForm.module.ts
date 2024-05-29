import { Module } from "@nestjs/common";
import { LeadCaptureFormModuleBase } from "./base/leadCaptureForm.module.base";
import { LeadCaptureFormService } from "./leadCaptureForm.service";
import { LeadCaptureFormController } from "./leadCaptureForm.controller";
import { LeadCaptureFormResolver } from "./leadCaptureForm.resolver";

@Module({
  imports: [LeadCaptureFormModuleBase],
  controllers: [LeadCaptureFormController],
  providers: [LeadCaptureFormService, LeadCaptureFormResolver],
  exports: [LeadCaptureFormService],
})
export class LeadCaptureFormModule {}
