import BookModel from "../models/Book.model";

async function getAllBooks() {
  return BookModel.find({}, { _id: 0, books: {
    // $slice: [0, 10]
    pages: 0,
    country: 0,
    link: 0,
    imageLink: 0,
  } });
}

async function getBookByTitle(title: string) {
  return BookModel.find({ books: { title: { $regex: `/${title}/i` }} }, { _id: 0, books: {
    pages: 0,
    country: 0,
    link: 0,
    imageLink: 0,
  }});
}

export {
  getAllBooks,
  getBookByTitle,
};
