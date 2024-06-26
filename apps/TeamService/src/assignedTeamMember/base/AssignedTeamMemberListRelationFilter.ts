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
import { AssignedTeamMemberWhereInput } from "./AssignedTeamMemberWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AssignedTeamMemberListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AssignedTeamMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignedTeamMemberWhereInput)
  @IsOptional()
  @Field(() => AssignedTeamMemberWhereInput, {
    nullable: true,
  })
  every?: AssignedTeamMemberWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignedTeamMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignedTeamMemberWhereInput)
  @IsOptional()
  @Field(() => AssignedTeamMemberWhereInput, {
    nullable: true,
  })
  some?: AssignedTeamMemberWhereInput;

  @ApiProperty({
    required: false,
    type: () => AssignedTeamMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => AssignedTeamMemberWhereInput)
  @IsOptional()
  @Field(() => AssignedTeamMemberWhereInput, {
    nullable: true,
  })
  none?: AssignedTeamMemberWhereInput;
}
export { AssignedTeamMemberListRelationFilter as AssignedTeamMemberListRelationFilter };
