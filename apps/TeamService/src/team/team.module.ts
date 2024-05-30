import { Module } from "@nestjs/common";
import { TeamModuleBase } from "./base/team.module.base";
import { TeamService } from "./team.service";
import { TeamController } from "./team.controller";
import { TeamResolver } from "./team.resolver";

@Module({
  imports: [TeamModuleBase],
  controllers: [TeamController],
  providers: [TeamService, TeamResolver],
  exports: [TeamService],
})
export class TeamModule {}
