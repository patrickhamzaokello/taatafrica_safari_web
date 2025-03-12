import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllSafariPackages() {
  return await prisma.safariPackage.findMany();
}

export async function getSafariPackageById(id: string) {
  return await prisma.safariPackage.findUnique({
    where: { id },
  });
}