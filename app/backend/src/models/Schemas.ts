import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
  author: String,
  title: String,
  year: Number,
  pages: Number,
  country: String,
  language: String,
  link: String,
  imageLink: String,
});

export default booksSchema;
