import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema({
    Costomer_id: {
        type: string,
        required: true
    },
    Items: {
        type: [string]
    },
    Total: { type: number }

}, { timestamps: true })

export default mongoose.model('Ordere', OrderSchema)