import {RequestHandler} from "express";
import {z} from "zod";
import * as AuthService from '../services/AuthService';

export const login: RequestHandler = (req, res) => {
    const loginSchema = z.object({
        password: z.string()
    });

    const body = loginSchema.safeParse(req.body);

    if(!body.success) return res.json({error: 'Dados inválidos'});

    if(!AuthService.validatePassword(body.data.password)) return res.status(403).json({error: 'Acesso negado!'});

    return res.json({token: AuthService.createToken()});
}