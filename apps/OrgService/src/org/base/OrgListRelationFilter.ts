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
import { OrgWhereInput } from "./OrgWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OrgListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OrgWhereInput,
  })
  @ValidateNested()
  @Type(() => OrgWhereInput)
  @IsOptional()
  @Field(() => OrgWhereInput, {
    nullable: true,
  })
  every?: OrgWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrgWhereInput,
  })
  @ValidateNested()
  @Type(() => OrgWhereInput)
  @IsOptional()
  @Field(() => OrgWhereInput, {
    nullable: true,
  })
  some?: OrgWhereInput;

  @ApiProperty({
    required: false,
    type: () => OrgWhereInput,
  })
  @ValidateNested()
  @Type(() => OrgWhereInput)
  @IsOptional()
  @Field(() => OrgWhereInput, {
    nullable: true,
  })
  none?: OrgWhereInput;
}
export { OrgListRelationFilter as OrgListRelationFilter };
