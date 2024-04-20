import {RequestHandler} from "express";
import * as GroupService from "../services/GroupService";

export const getAll: RequestHandler = async (req, res) => {

    const {event_id} = req.params;

    const groups = await GroupService.getAll(parseInt(event_id));
    if (!groups) return res.json({error: 'Ocorreu um erro!'});

    return res.json({groups: groups});
}