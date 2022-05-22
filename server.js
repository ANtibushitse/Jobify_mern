import express from "express";
const app = express();
import dotenv from "dotenv"
dotenv.config()

//db authenticate usrer
import connectDB from "./db/connect.js";
//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
notFoundMiddleware
errorHandlerMiddleware

app.use(express.json());

app.get("/",(req,res )=>{
    res.send("Hello World");
},);
app.use('/api/v1/auth', authRouter);  
app.use('/api/v1/jobs', jobsRouter)


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