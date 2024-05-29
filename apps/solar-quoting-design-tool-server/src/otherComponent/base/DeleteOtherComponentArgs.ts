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
import { OtherComponentWhereUniqueInput } from "./OtherComponentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteOtherComponentArgs {
  @ApiProperty({
    required: true,
    type: () => OtherComponentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OtherComponentWhereUniqueInput)
  @Field(() => OtherComponentWhereUniqueInput, { nullable: false })
  where!: OtherComponentWhereUniqueInput;
}

export { DeleteOtherComponentArgs as DeleteOtherComponentArgs };