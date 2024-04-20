import {Router} from "express";
import * as AuthController from '../controllers/AuthController'
import * as EventController from '../controllers/EventController'

const router = Router();

router.get('/ping', AuthController.validate, (req, res) => {
    res.json({pong: true, admin: true});
});

router.post('/login', AuthController.login);

router.get('/events', AuthController.validate, EventController.getAll);
router.get('/events/:id', AuthController.validate, EventController.getById);
router.post('/events', AuthController.validate, EventController.add);
router.put('/events/:id', AuthController.validate, EventController.edit);

export default router;
