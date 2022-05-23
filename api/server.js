import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import item from "./routes/item.js"
import auth from "./routes/auth.js"
const app = express();

dotenv.config;


app.use(express.json())
app.use(cors({
    credentials: true,
    origin: '*',
    AccessControlAllowCredentials: true
}));

app.use("/api/item", item);
app.use("/api/auth", auth);

const connect = async() => {
    try {
        await mongoose.connect("mongodb+srv://nmemarcoding:Nima1377@cluster0.n3nv6.mongodb.net/e-commarce?retryWrites=true&w=majority")
        console.log("Conected to Mongo db")
    } catch (eroor) {
        throw (eroor)

    }
}

mongoose.connection.on("disconnected", () => {
    console.log("mangoDB disconnected")
})

mongoose.connection.on("conected", () => {
    console.log("mangoDB conected")
})

app.listen(505, () => {
    connect()
    console.log("connected to server on port 505!")
})