import express from "express";
import router from "./router/books.routes";


const app = express();
app.use(express.json());
app.use('/books', router);

export default app;
