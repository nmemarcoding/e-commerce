import mongoose from 'mongoose';
const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    photos: {
        type: [String]

    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }

}, { timestamps: true })
export default mongoose.model("Item", ItemSchema)