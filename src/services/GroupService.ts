import {PrismaClient, Prisma} from "@prisma/client";

const prisma = new PrismaClient();
export const getAll = async (event_id: number) => {
    return prisma.eventGroup.findMany({
        where: {event_id}
    });
}

type GetByIdFilters = {id: number, event_id?: number}
export const getById = async (filters: GetByIdFilters) => {
    return prisma.eventGroup.findFirst({
        where: filters
    })
}