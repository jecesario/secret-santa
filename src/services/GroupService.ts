import {PrismaClient, Prisma} from "@prisma/client";

const prisma = new PrismaClient();
export const getAll = async (event_id: number) => {
    return prisma.eventGroup.findMany({
        where: {event_id}
    });
}