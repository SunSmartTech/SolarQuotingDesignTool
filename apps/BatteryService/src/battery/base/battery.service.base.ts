/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Battery as PrismaBattery } from "@prisma/client";

export class BatteryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BatteryCountArgs, "select">): Promise<number> {
    return this.prisma.battery.count(args);
  }

  async batteries<T extends Prisma.BatteryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BatteryFindManyArgs>
  ): Promise<PrismaBattery[]> {
    return this.prisma.battery.findMany<Prisma.BatteryFindManyArgs>(args);
  }
  async battery<T extends Prisma.BatteryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BatteryFindUniqueArgs>
  ): Promise<PrismaBattery | null> {
    return this.prisma.battery.findUnique(args);
  }
  async createBattery<T extends Prisma.BatteryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BatteryCreateArgs>
  ): Promise<PrismaBattery> {
    return this.prisma.battery.create<T>(args);
  }
  async updateBattery<T extends Prisma.BatteryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BatteryUpdateArgs>
  ): Promise<PrismaBattery> {
    return this.prisma.battery.update<T>(args);
  }
  async deleteBattery<T extends Prisma.BatteryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BatteryDeleteArgs>
  ): Promise<PrismaBattery> {
    return this.prisma.battery.delete(args);
  }
}
