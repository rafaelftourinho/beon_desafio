import BookModel from "../models/Book.model";

async function getAllBooks() {
  const [books] = await BookModel.find({}, {
    _id: 0, books: {
      // $slice: [0, 10]
      pages: 0,
      country: 0,
      link: 0,
      imageLink: 0,
    }
  });

  return books;
}

async function getBookByTitle(title: string) {
  return BookModel.find({
    $or: [
      { "books.title": { $regex: title, $options: "i" } },
      { "books.author": { $regex: title, $options: "i" } },
      { "books.language": { $regex: title, $options: "i" } },
    ],
  }, {
    _id: 0, books: {
      pages: 0,
      country: 0,
      link: 0,
      imageLink: 0,
    }
  });
}

export {
  getAllBooks,
  getBookByTitle,
};
