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

// get items

router.get('/', async(req, res) => {
    try {
        const items = await Item.find(req.query);
        res.status(200).json(items)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// get itwm by id
router.get('/:id', async(req, res) => {
    try {

        const item = await Item.findById(req.params.id)
        res.status(200).json(item)
    } catch (err) {
        res.status(500).json(err.message)

    }
})

// update item by id 

router.put('/:id', async(req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id, { $set: req.body }, { new: true }
        );
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// delete item by id

router.delete('/:id', async(req, res) => {


    try {
        await Item.findByIdAndDelete(req.params.id);

        res.status(200).json("Item has been deleted.");

    } catch (err) {
        res.status(500).json(err.message)
    }

})


export default router;