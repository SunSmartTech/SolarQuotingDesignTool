/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LeadCaptureFormWhereInput } from "./LeadCaptureFormWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LeadCaptureFormListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LeadCaptureFormWhereInput,
  })
  @ValidateNested()
  @Type(() => LeadCaptureFormWhereInput)
  @IsOptional()
  @Field(() => LeadCaptureFormWhereInput, {
    nullable: true,
  })
  every?: LeadCaptureFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeadCaptureFormWhereInput,
  })
  @ValidateNested()
  @Type(() => LeadCaptureFormWhereInput)
  @IsOptional()
  @Field(() => LeadCaptureFormWhereInput, {
    nullable: true,
  })
  some?: LeadCaptureFormWhereInput;

  @ApiProperty({
    required: false,
    type: () => LeadCaptureFormWhereInput,
  })
  @ValidateNested()
  @Type(() => LeadCaptureFormWhereInput)
  @IsOptional()
  @Field(() => LeadCaptureFormWhereInput, {
    nullable: true,
  })
  none?: LeadCaptureFormWhereInput;
}
export { LeadCaptureFormListRelationFilter as LeadCaptureFormListRelationFilter };
