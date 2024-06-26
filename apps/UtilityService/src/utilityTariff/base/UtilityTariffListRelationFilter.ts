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
import { UtilityTariffWhereInput } from "./UtilityTariffWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UtilityTariffListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UtilityTariffWhereInput,
  })
  @ValidateNested()
  @Type(() => UtilityTariffWhereInput)
  @IsOptional()
  @Field(() => UtilityTariffWhereInput, {
    nullable: true,
  })
  every?: UtilityTariffWhereInput;

  @ApiProperty({
    required: false,
    type: () => UtilityTariffWhereInput,
  })
  @ValidateNested()
  @Type(() => UtilityTariffWhereInput)
  @IsOptional()
  @Field(() => UtilityTariffWhereInput, {
    nullable: true,
  })
  some?: UtilityTariffWhereInput;

  @ApiProperty({
    required: false,
    type: () => UtilityTariffWhereInput,
  })
  @ValidateNested()
  @Type(() => UtilityTariffWhereInput)
  @IsOptional()
  @Field(() => UtilityTariffWhereInput, {
    nullable: true,
  })
  none?: UtilityTariffWhereInput;
}
export { UtilityTariffListRelationFilter as UtilityTariffListRelationFilter };
