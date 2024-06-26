/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UtilityTariffWhereInput } from "./UtilityTariffWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { UtilityTariffOrderByInput } from "./UtilityTariffOrderByInput";

@ArgsType()
class UtilityTariffFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UtilityTariffWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => UtilityTariffWhereInput, { nullable: true })
  @Type(() => UtilityTariffWhereInput)
  where?: UtilityTariffWhereInput;

  @ApiProperty({
    required: false,
    type: [UtilityTariffOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [UtilityTariffOrderByInput], { nullable: true })
  @Type(() => UtilityTariffOrderByInput)
  orderBy?: Array<UtilityTariffOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UtilityTariffFindManyArgs as UtilityTariffFindManyArgs };
