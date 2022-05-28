import express from "express";
import Order from "../models/Order.js"
const router = express.Router();


// creat order
router.post('/', async(req, res) => {
    const newOrder = new Order(req.body)
    try {
        const saveOrder = await newOrder.save();
        res.status(200).json(saveOrder)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// get  all orders
router.get('/', async(req, res) => {
    try {
        const orders = await Order.find(req.query);
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// get orders by customer id 
router.get('/:id', async(req, res) => {
    try {

        const order = await Order.find({ Costomer_id: req.params.id })

        res.status(200).json(order)

    } catch (err) {
        res.status(500).json(err.message)

    }
})

export default router;