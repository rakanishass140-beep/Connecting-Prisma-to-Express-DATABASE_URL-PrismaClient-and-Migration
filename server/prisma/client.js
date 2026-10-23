import { PrismaClient } from "@prisma/client";

// Export a single Prisma client instance for the Express application.
const prisma = new PrismaClient();

export default prisma;
