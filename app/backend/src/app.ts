import express from "express";
import cors from "cors";
import router from "./router/books.routes";


const app = express();
app.use(express.json());
app.use(cors());
app.use('/books', router);

export default app;
