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
import { AssignedInstallerWhereInput } from "./AssignedInstallerWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AssignedInstallerListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AssignedInstallerWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignedInstallerWhereInput)
  @IsOptional()
  @Field(() => AssignedInstallerWhereInput, {
    nullable: true,
  })
  every?: AssignedInstallerWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignedInstallerWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignedInstallerWhereInput)
  @IsOptional()
  @Field(() => AssignedInstallerWhereInput, {
    nullable: true,
  })
  some?: AssignedInstallerWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignedInstallerWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignedInstallerWhereInput)
  @IsOptional()
  @Field(() => AssignedInstallerWhereInput, {
    nullable: true,
  })
  none?: AssignedInstallerWhereInput;
}
export { AssignedInstallerListRelationFilter as AssignedInstallerListRelationFilter };
