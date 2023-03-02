import BookModel from "../models/Book.model";
import redis from "../models/ConnectionRedis";

async function getAllBooks() {
  const cache: any = await redis();

  const cached =  JSON.parse(await cache.get("books"));
  console.log(cached);
  
  if (cached.length) return cached;

  const books = await BookModel.find({}, {}, { lean: true });

  await cache.set("books", JSON.stringify(books));

  return books;
}

async function getBookByTitle(title: string) {
  const cache: any = await redis();

  const cached =  JSON.parse(await cache.get(title));
  if (cached) return cached;

  const result = await BookModel.find({
    $or: [
      { title: { $regex: title, $options: "i" } },
      { author: { $regex: title, $options: "i" } },
      { language: { $regex: title, $options: "i" } },
    ],
  }, {}, { lean: true });
  
  await cache.set(title, JSON.stringify(result));

  return result;
}

//TODO fazer a função getOneBook

export {
  getAllBooks,
  getBookByTitle,
};
