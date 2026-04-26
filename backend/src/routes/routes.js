import { Router } from "express";

import { send } from "../controllers/messageController.js";
import createClients from "../controllers/sessionController.js";

const router = Router();


router.post('/send', send);
router.post('/start-session', createClients);

export default router;