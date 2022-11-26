import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));

//Middleware to be able to access body data on requests
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //x-www-form-urlencoded

//---- API Start----

//Events
import eventRouter from "./routes/eventRoutes";
app.use("/", eventRouter);

//Messaging
import messagingRouter from "./routes/messagingRoutes";
app.use("/", messagingRouter);

//---- API End ----

//Middleware for handling errors. This has to go after the routes.
import { errorHandler } from "./middleware/errorMiddleware";
app.use(errorHandler);
