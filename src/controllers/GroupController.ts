import {RequestHandler} from "express";
import * as GroupService from "../services/GroupService";

export const getAll: RequestHandler = async (req, res) => {

    const {event_id} = req.params;

    const groups = await GroupService.getAll(parseInt(event_id));
    if (!groups) return res.json({error: 'Ocorreu um erro!'});

    return res.json({groups: groups});
}

export const getById: RequestHandler = async (req, res) => {
    const {id, event_id} = req.params;
    const eventGroup = await GroupService.getById({id: parseInt(id), event_id: parseInt(event_id)});
    if(!eventGroup) return res.status(404).json({error: `Grupo com o id: ${id} não encontrado!`});

    return res.json({eventGroup: eventGroup});
}