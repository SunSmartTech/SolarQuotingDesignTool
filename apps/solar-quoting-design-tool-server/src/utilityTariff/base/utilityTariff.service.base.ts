/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UtilityTariff as PrismaUtilityTariff } from "@prisma/client";

export class UtilityTariffServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.UtilityTariffCountArgs, "select">
  ): Promise<number> {
    return this.prisma.utilityTariff.count(args);
  }

  async utilityTariffs<T extends Prisma.UtilityTariffFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UtilityTariffFindManyArgs>
  ): Promise<PrismaUtilityTariff[]> {
    return this.prisma.utilityTariff.findMany<Prisma.UtilityTariffFindManyArgs>(
      args
    );
  }
  async utilityTariff<T extends Prisma.UtilityTariffFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UtilityTariffFindUniqueArgs>
  ): Promise<PrismaUtilityTariff | null> {
    return this.prisma.utilityTariff.findUnique(args);
  }
  async createUtilityTariff<T extends Prisma.UtilityTariffCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UtilityTariffCreateArgs>
  ): Promise<PrismaUtilityTariff> {
    return this.prisma.utilityTariff.create<T>(args);
  }
  async updateUtilityTariff<T extends Prisma.UtilityTariffUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UtilityTariffUpdateArgs>
  ): Promise<PrismaUtilityTariff> {
    return this.prisma.utilityTariff.update<T>(args);
  }
  async deleteUtilityTariff<T extends Prisma.UtilityTariffDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UtilityTariffDeleteArgs>
  ): Promise<PrismaUtilityTariff> {
    return this.prisma.utilityTariff.delete(args);
  }
}