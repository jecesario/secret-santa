import {RequestHandler} from "express";
import * as EventService from '../services/EventService';
import {z} from "zod";

export const getAll: RequestHandler = async (req, res) => {
    const events = await EventService.getAll();
    if (!events) return res.json({error: 'Ocorreu um erro!'});

    return res.json({events: events});
}

export const getById: RequestHandler = async (req, res) => {
    const {id} = req.params;
    const event = await EventService.getById(parseInt(id));
    if (!event) return res.status(404).json({error: `Evento com id: ${id} não encontrado!`});

    return res.json({event: event});
}

export const add: RequestHandler = async (req, res) => {
    const addEventSchema = z.object({
        title: z.string(),
        description: z.string(),
        grouped: z.boolean()
    });

    const body = addEventSchema.safeParse(req.body);
    if (!body.success) return res.status(400).json({error: 'O corpo da requisição contem erro!'});

    const newEvent = await EventService.add(body.data);

    if (!newEvent) return res.status(500).json({error: 'Ocorreu um erro ao tentar cadastrar o evento no banco!'});

    return res.status(201).json({event: newEvent});
}

export const edit: RequestHandler = async (req, res) => {
    const {id} = req.params;
    const editEventSchema = z.object({
        status: z.boolean().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        grouped: z.boolean().optional()
    });

    const body = editEventSchema.safeParse(req.body);
    if (!body.success) return res.status(400).json({error: 'O corpo da requisição contem erro!'});

    const editedEvent = await EventService.edit(parseInt(id), body.data);

    if(!editedEvent) return res.status(400).json({error: 'Ocorreu um erro ao tentar editar o evento no banco!'});

    if(editedEvent.status) {
        //TODO: Fazer o sorteio
    } else {
        //TODO: Limpar o sorteio
    }

    res.json({event: editedEvent});
}

export const remove: RequestHandler = async (req, res) => {
    const {id} = req.params;

    const deleteEvent = await EventService.remove(parseInt(id));
    if (!deleteEvent) return res.status(400).json({error: 'Ocorreu um erro ao tentar remover o evento do banco!'});

    return res.status(204).end();
}