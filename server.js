import express from "express";
import dotenv from "dotenv"
import 'express-async-errors'


//db authenticate usrer
import connectDB from "./db/connect.js";
//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();
dotenv.config()

notFoundMiddleware
errorHandlerMiddleware

app.use(express.json());
// this is a middleware that will parse the body of the request and will make it available on req.body


app.get("/", (req, res) => {
		res.send("Hello World");
},);

/* Using the routes from the authRouter and jobsRouter files. */

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

/* This is a middleware that will catch any errors that are thrown in the application. */

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;

/**
 * We're trying to connect to the database, and if that works, we're going to start the server
 */
const start = async () => {
		try {
				await connectDB(process.env.MONGO_URL);
				app.listen(port, () => console.log(`Listening on port ${port}`));
		} catch (error) {
				console.log(error);
		}

}
start();