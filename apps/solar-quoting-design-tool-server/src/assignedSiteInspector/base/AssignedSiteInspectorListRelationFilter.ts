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
import { AssignedSiteInspectorWhereInput } from "./AssignedSiteInspectorWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AssignedSiteInspectorListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AssignedSiteInspectorWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignedSiteInspectorWhereInput)
  @IsOptional()
  @Field(() => AssignedSiteInspectorWhereInput, {
    nullable: true,
  })
  every?: AssignedSiteInspectorWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignedSiteInspectorWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignedSiteInspectorWhereInput)
  @IsOptional()
  @Field(() => AssignedSiteInspectorWhereInput, {
    nullable: true,
  })
  some?: AssignedSiteInspectorWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignedSiteInspectorWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignedSiteInspectorWhereInput)
  @IsOptional()
  @Field(() => AssignedSiteInspectorWhereInput, {
    nullable: true,
  })
  none?: AssignedSiteInspectorWhereInput;
}
export { AssignedSiteInspectorListRelationFilter as AssignedSiteInspectorListRelationFilter };
