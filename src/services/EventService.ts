import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
export const getAll = async () => {
    return prisma.event.findMany();
}

export const getEvent = async (id: number) => {
    return prisma.event.findFirst({
        where: {id}
    });
}