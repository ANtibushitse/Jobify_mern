import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
const app = express();
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

app.listen(port, () => console.log(`Listening on port ${port}`));