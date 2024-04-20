import {RequestHandler} from "express";
import * as EventService from '../services/EventService';

export const getAll: RequestHandler = async (req, res) => {
    const events = await EventService.getAll();
    if(!events) return res.json({error: 'Ocorreu um erro!'});

    return res.json({events: events});
}

export const getEvent: RequestHandler = async (req, res) => {
    const {id} = req.params;
    const event = await EventService.getEvent(parseInt(id));
    if(!event) return res.status(404).json({error: `Evento com id: ${id} não encontrado!`});

    return res.json({event: event});
}