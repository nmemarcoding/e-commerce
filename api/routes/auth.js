import express from "express";
import User from "../models/User.js"
const router = express.Router();
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


// register
router.post('/register', async(req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(200).send("User has been created.");
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// login
router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(500).json("User not found!");

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return res.status(500).json("Wrong password or username!");

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin },
            "fff"
        );

        const { password, isAdmin, ...otherDetails } = user._doc;
        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ details: {...otherDetails }, isAdmin });
    } catch (err) {
        res.status(500).json(err.message)
    }
})


export default router;