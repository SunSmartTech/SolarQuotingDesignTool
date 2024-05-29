/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AssignedInstaller as PrismaAssignedInstaller,
} from "@prisma/client";

export class AssignedInstallerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssignedInstallerCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assignedInstaller.count(args);
  }

  async assignedInstallers<T extends Prisma.AssignedInstallerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignedInstallerFindManyArgs>
  ): Promise<PrismaAssignedInstaller[]> {
    return this.prisma.assignedInstaller.findMany<Prisma.AssignedInstallerFindManyArgs>(
      args
    );
  }
  async assignedInstaller<T extends Prisma.AssignedInstallerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignedInstallerFindUniqueArgs>
  ): Promise<PrismaAssignedInstaller | null> {
    return this.prisma.assignedInstaller.findUnique(args);
  }
  async createAssignedInstaller<T extends Prisma.AssignedInstallerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignedInstallerCreateArgs>
  ): Promise<PrismaAssignedInstaller> {
    return this.prisma.assignedInstaller.create<T>(args);
  }
  async updateAssignedInstaller<T extends Prisma.AssignedInstallerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignedInstallerUpdateArgs>
  ): Promise<PrismaAssignedInstaller> {
    return this.prisma.assignedInstaller.update<T>(args);
  }
  async deleteAssignedInstaller<T extends Prisma.AssignedInstallerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AssignedInstallerDeleteArgs>
  ): Promise<PrismaAssignedInstaller> {
    return this.prisma.assignedInstaller.delete(args);
  }
}