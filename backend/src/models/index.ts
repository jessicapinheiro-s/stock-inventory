import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const dbConnect = async () => {
    try {
        await prisma.$connect();
    } catch (error) {
        console.error('[CONNECT Error to connect to DB:', (error instanceof Error) ? error.message : error);
    }
}