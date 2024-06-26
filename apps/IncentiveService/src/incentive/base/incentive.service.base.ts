/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Incentive as PrismaIncentive } from "@prisma/client";

export class IncentiveServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IncentiveCountArgs, "select">
  ): Promise<number> {
    return this.prisma.incentive.count(args);
  }

  async incentives<T extends Prisma.IncentiveFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncentiveFindManyArgs>
  ): Promise<PrismaIncentive[]> {
    return this.prisma.incentive.findMany<Prisma.IncentiveFindManyArgs>(args);
  }
  async incentive<T extends Prisma.IncentiveFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncentiveFindUniqueArgs>
  ): Promise<PrismaIncentive | null> {
    return this.prisma.incentive.findUnique(args);
  }
  async createIncentive<T extends Prisma.IncentiveCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncentiveCreateArgs>
  ): Promise<PrismaIncentive> {
    return this.prisma.incentive.create<T>(args);
  }
  async updateIncentive<T extends Prisma.IncentiveUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncentiveUpdateArgs>
  ): Promise<PrismaIncentive> {
    return this.prisma.incentive.update<T>(args);
  }
  async deleteIncentive<T extends Prisma.IncentiveDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncentiveDeleteArgs>
  ): Promise<PrismaIncentive> {
    return this.prisma.incentive.delete(args);
  }
}
