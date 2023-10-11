
import { asyncHandler } from './../../../utils/globalErrorHandling.js';
import userModel from './../../../../DB/models/user.model.js';
import messageModel from './../../../../DB/models/message.model.js';

export const sendMessage = asyncHandler(async (req, res, next) => {
    const { content, reciverId } = req.body
    const checkUser = await userModel.findById(reciverId)
    if (!checkUser) return next(new Error('In_Valid ReciverId', { cause: 400 })) // check User
    const message = await messageModel.create({ content, reciverId }) // create message
    return res.status(200).json({ success: true, message: "Message Sent Successfully" })
})
export const getUserMessage = asyncHandler(async (req, res, next) => {
    const message = await messageModel.find({ reciverId: req.user._id }).populate({
        path: 'reciverId'
    })
    return message ? res.status(200).json({ success: true, message }) : next(new Error("This User Id does not have any messages yet !"))
})

