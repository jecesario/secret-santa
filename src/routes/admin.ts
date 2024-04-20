import {Router} from "express";
import * as AuthController from '../controllers/AuthController'

const router = Router();

router.get('/ping', AuthController.validate, (req, res) => {
    res.json({pong: true, admin: true});
});

router.post('/login', AuthController.login)

export default router;
