import {PrismaClient, Prisma} from "@prisma/client";

const prisma = new PrismaClient();
export const getAll = async () => {
    return prisma.event.findMany();
}

export const getById = async (id: number) => {
    return prisma.event.findFirst({
        where: {id}
    });
}

type EventCreateData = Prisma.Args<typeof prisma.event, 'create'>['data'];
export const add = async (data: EventCreateData) => {
    return prisma.event.create({data});
}

type EventEditData = Prisma.Args<typeof prisma.event, 'update'>['data'];

export const edit = async (id: number, data: EventEditData) => {
    return prisma.event.update({
        where: {id},
        data
    });
}