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
import { ProjectUpdateManyWithoutOrgsInput } from "./ProjectUpdateManyWithoutOrgsInput";
import { Type } from "class-transformer";

@InputType()
class OrgUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  customerData?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProjectUpdateManyWithoutOrgsInput,
  })
  @ValidateNested()
  @Type(() => ProjectUpdateManyWithoutOrgsInput)
  @IsOptional()
  @Field(() => ProjectUpdateManyWithoutOrgsInput, {
    nullable: true,
  })
  projects?: ProjectUpdateManyWithoutOrgsInput;
}

export { OrgUpdateInput as OrgUpdateInput };
