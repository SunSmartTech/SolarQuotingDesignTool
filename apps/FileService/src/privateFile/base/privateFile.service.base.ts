/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, PrivateFile as PrismaPrivateFile } from "@prisma/client";

export class PrivateFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PrivateFileCountArgs, "select">
  ): Promise<number> {
    return this.prisma.privateFile.count(args);
  }

  async privateFiles<T extends Prisma.PrivateFileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateFileFindManyArgs>
  ): Promise<PrismaPrivateFile[]> {
    return this.prisma.privateFile.findMany<Prisma.PrivateFileFindManyArgs>(
      args
    );
  }
  async privateFile<T extends Prisma.PrivateFileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateFileFindUniqueArgs>
  ): Promise<PrismaPrivateFile | null> {
    return this.prisma.privateFile.findUnique(args);
  }
  async createPrivateFile<T extends Prisma.PrivateFileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateFileCreateArgs>
  ): Promise<PrismaPrivateFile> {
    return this.prisma.privateFile.create<T>(args);
  }
  async updatePrivateFile<T extends Prisma.PrivateFileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateFileUpdateArgs>
  ): Promise<PrismaPrivateFile> {
    return this.prisma.privateFile.update<T>(args);
  }
  async deletePrivateFile<T extends Prisma.PrivateFileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PrivateFileDeleteArgs>
  ): Promise<PrismaPrivateFile> {
    return this.prisma.privateFile.delete(args);
  }
}
