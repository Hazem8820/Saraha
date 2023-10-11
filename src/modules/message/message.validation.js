import { globalValidation } from "../../middleware/validation.js"
import Joi from "joi"

export const sendMessageValidation = Joi.object({
    content: globalValidation.content,
    reciverId: globalValidation._id
}).required()