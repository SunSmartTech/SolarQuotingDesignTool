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
import { SetbackWhereInput } from "./SetbackWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SetbackOrderByInput } from "./SetbackOrderByInput";

@ArgsType()
class SetbackFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SetbackWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SetbackWhereInput, { nullable: true })
  @Type(() => SetbackWhereInput)
  where?: SetbackWhereInput;

  @ApiProperty({
    required: false,
    type: [SetbackOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SetbackOrderByInput], { nullable: true })
  @Type(() => SetbackOrderByInput)
  orderBy?: Array<SetbackOrderByInput>;

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

export { SetbackFindManyArgs as SetbackFindManyArgs };