import { validation } from '../../middleware/validation.js'
import { sendMessageValidation } from './message.validation.js'
import * as MC from './controller/message.controller.js'
import isAuthenticated from './../../middleware/authentication.js';
import { Router } from "express"
const router = Router()

router.post('/send',validation(sendMessageValidation),MC.sendMessage)
router.get('/user',isAuthenticated,MC.getUserMessage)

export default router