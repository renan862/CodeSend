import { Router } from "express";

import { upload } from "../controllers/uploadController.js";
import { send } from "../controllers/messageController.js";
import createClients from "../controllers/sessionController.js";

const router = Router();

router.post('/upload', upload);
router.post('/send', send);
router.post('/start-session', createClients);

export default router;