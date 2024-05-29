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
import { RoofTypeWhereInput } from "./RoofTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RoofTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RoofTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => RoofTypeWhereInput)
  @IsOptional()
  @Field(() => RoofTypeWhereInput, {
    nullable: true,
  })
  every?: RoofTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => RoofTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => RoofTypeWhereInput)
  @IsOptional()
  @Field(() => RoofTypeWhereInput, {
    nullable: true,
  })
  some?: RoofTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => RoofTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => RoofTypeWhereInput)
  @IsOptional()
  @Field(() => RoofTypeWhereInput, {
    nullable: true,
  })
  none?: RoofTypeWhereInput;
}
export { RoofTypeListRelationFilter as RoofTypeListRelationFilter };