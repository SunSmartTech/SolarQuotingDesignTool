/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, RoofType as PrismaRoofType } from "@prisma/client";

export class RoofTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.RoofTypeCountArgs, "select">): Promise<number> {
    return this.prisma.roofType.count(args);
  }

  async roofTypes<T extends Prisma.RoofTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoofTypeFindManyArgs>
  ): Promise<PrismaRoofType[]> {
    return this.prisma.roofType.findMany<Prisma.RoofTypeFindManyArgs>(args);
  }
  async roofType<T extends Prisma.RoofTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoofTypeFindUniqueArgs>
  ): Promise<PrismaRoofType | null> {
    return this.prisma.roofType.findUnique(args);
  }
  async createRoofType<T extends Prisma.RoofTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoofTypeCreateArgs>
  ): Promise<PrismaRoofType> {
    return this.prisma.roofType.create<T>(args);
  }
  async updateRoofType<T extends Prisma.RoofTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoofTypeUpdateArgs>
  ): Promise<PrismaRoofType> {
    return this.prisma.roofType.update<T>(args);
  }
  async deleteRoofType<T extends Prisma.RoofTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RoofTypeDeleteArgs>
  ): Promise<PrismaRoofType> {
    return this.prisma.roofType.delete(args);
  }
}