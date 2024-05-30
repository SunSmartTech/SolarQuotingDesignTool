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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { OrgWhereUniqueInput } from "../../org/base/OrgWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrgWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrgWhereUniqueInput)
  @IsOptional()
  @Field(() => OrgWhereUniqueInput, {
    nullable: true,
  })
  org?: OrgWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  projectName?: string | null;
}

export { ProjectUpdateInput as ProjectUpdateInput };
