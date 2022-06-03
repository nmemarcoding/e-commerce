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

// update order by order id 
router.put('/:id', async(req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// delet order by id 
router.delete('/:id', async(req, res) => {


    try {
        await Order.findByIdAndDelete(req.params.id);

        res.status(200).json("Order has been deleted.");

    } catch (err) {
        res.status(500).json(err.message)
    }

})

export default router;