import express from "express";
import Item from "../models/Item.js"
const router = express.Router();


// creat item

router.post('/', async(req, res) => {
    const newItem = new Item(req.body)
    try {
        const saveItem = await newItem.save();
        res.status(200).json(saveItem)
    } catch (error) {
        console.log(error);
    }
})

export default router;