import booksSchema from "./Schemas";
import mongoose from "mongoose";
import IBook from "../interface/IBook";

const BookModel = mongoose.model<IBook>("Book", booksSchema, 'books');

export default mongoose.models['Book'] || BookModel;
