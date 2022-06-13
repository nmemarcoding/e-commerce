import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema({
    Costomer_id: {
        type: String,
        required: true
    },
    Items: {
        type: [Object]
    },
    Total: { type: Number },
    Status: {
        type: String,
        default: "prosseing",

    }

}, { timestamps: true })

export default mongoose.model('Ordere', OrderSchema)