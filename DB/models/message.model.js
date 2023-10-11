import mongoose, { Schema, model, Types } from "mongoose"

const messageSchema = new Schema({
    content: {
        type: String,
        required: true,
        min: 10
    },
    reciverId: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

const messageModel = mongoose.models.Message || model('Message', messageSchema)
export default messageModel

