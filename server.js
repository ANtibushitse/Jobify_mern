import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
const app = express();
import dotenv from "dotenv"
import connectDB from "./db/connect.js";
dotenv.config()
// middleware
notFoundMiddleware
app.get("/",(req,res )=>{
    throw new Error("error");
    res.send("Hello World");
},

);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000;

/**
 * We're trying to connect to the database, and if that works, we're going to start the server
 */
const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Listening on port ${port}`));
    } catch (error){
        console.log(error);
        
    }

}
start();