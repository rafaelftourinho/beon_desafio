import BookModel from "../models/Book.model";
import redis from "../models/ConnectionRedis";

async function getAllBooks(skip: number, limit: number) {
  const cache: any = await redis();

  if (limit && (skip || skip === 0)) {
    const cashed = JSON.parse(await cache.get("books" + skip + limit));
    if (cashed && cashed.length) return cashed;

    const books = await BookModel.find({}, {}, { lean: true, limit, skip });

    await cache.set("books" + skip + limit, JSON.stringify(books));

    return books;
  }

  const cached =  JSON.parse(await cache.get("books"));
  if (cached && cached.length) return cached;
  
  const books = await BookModel.find({}, {}, { lean: true });
  
  await cache.set("books", JSON.stringify(books));

  return books;
}

async function getBookByTitle(title: string) {
  const cache: any = await redis();
  
  const cached =  JSON.parse(await cache.get(title));

  if (cached && cached.length) return cached;

  const result = await BookModel.find({
    $or: [
      { title: { $regex: title, $options: "i" } },
      { author: { $regex: title, $options: "i" } },
      { language: { $regex: title, $options: "i" } },
    ],
  }, {}, { lean: true });

  if (!result.length) return { type: 404, message: "Nenhum título, autor ou linguagem encontrado" };
  
  await cache.set(title, JSON.stringify(result));

  return result;
}

async function getOneBook(id: string) {
  const cache: any = await redis();

  const cached = JSON.parse(await cache.get(id));

  if (cached && cached.length) return cached;

  const result = await BookModel.findById({ _id: id }, {}, { lean: true });

  if (!result) return { type: 404, message: "Livro não encontrado" };

  await cache.set(id, JSON.stringify(result));

  return result;
}

async function getBooksByYearInterval(initialYear: string, finalYear: string) {
  const cache: any = await redis();

  const cached = JSON.parse(await cache.get(initialYear + finalYear));

  if (cached && cached.length) return cached;

  const result = await BookModel.find({
    year: { $gte: initialYear, $lte: finalYear },
  }, {}, { lean: true });

  if (!result.length) return { type: 404, message: "Nenhum livro encontrado nesse intervalo de anos" };

  await cache.set(initialYear + finalYear, JSON.stringify(result));

  return result;
}

export {
  getAllBooks,
  getBookByTitle,
  getOneBook,
  getBooksByYearInterval,
};
