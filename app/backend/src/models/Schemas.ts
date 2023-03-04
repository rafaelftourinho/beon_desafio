import mongoose from 'mongoose';
import { v4 } from 'uuid';

const booksSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: v4,
  },
  author: {
    type: String,
    index: true,
    required: true,
  },
  title: {
    type: String,
    index: true,
    required: true,
  },
  year: {
    type: Number,
    index: true,
  },
  pages: {
    type: Number,
    index: true,
  },
  country: {
    type: String,
    index: true,
  },
  language: {
    type: String,
    index: true,
  },
  link: {
    type: String,
    index: true,
  },
  imageLink: {
    type: String,
    index: true,
  },
}, {
  versionKey: false,
});



export default booksSchema;
