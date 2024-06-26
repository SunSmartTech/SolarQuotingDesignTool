/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Team as PrismaTeam } from "@prisma/client";

export class TeamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.TeamCountArgs, "select">): Promise<number> {
    return this.prisma.team.count(args);
  }

  async teams<T extends Prisma.TeamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamFindManyArgs>
  ): Promise<PrismaTeam[]> {
    return this.prisma.team.findMany<Prisma.TeamFindManyArgs>(args);
  }
  async team<T extends Prisma.TeamFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamFindUniqueArgs>
  ): Promise<PrismaTeam | null> {
    return this.prisma.team.findUnique(args);
  }
  async createTeam<T extends Prisma.TeamCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamCreateArgs>
  ): Promise<PrismaTeam> {
    return this.prisma.team.create<T>(args);
  }
  async updateTeam<T extends Prisma.TeamUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamUpdateArgs>
  ): Promise<PrismaTeam> {
    return this.prisma.team.update<T>(args);
  }
  async deleteTeam<T extends Prisma.TeamDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TeamDeleteArgs>
  ): Promise<PrismaTeam> {
    return this.prisma.team.delete(args);
  }
}
