import BookModel from "../models/Book.model";
import redis from "../models/ConnectionRedis";

// async function getAllBooks(skip: number, limit: number) {
//   const cache: any = await redis();

//   if (limit && (skip || skip === 0)) {
//     const cashed = JSON.parse(await cache.get("books" + skip + limit));
//     if (cashed && cashed.length) return cashed;

//     const books = await BookModel.find({}, {}, { lean: true, limit, skip });

//     await cache.set("books" + skip + limit, JSON.stringify(books));
    
//     return books;
//   }

//   const cached =  JSON.parse(await cache.get("books"));
//   if (cached && cached.length) return cached;
  
//   const books = await BookModel.find({}, {}, { lean: true });
  
//   await cache.set("books", JSON.stringify(books));

//   return books;
// }
const totalBookOnPage = 10;

async function getAllBooks(page: number = 0) {
  const cache: any = await redis();
  console.log('getAll');

  const cached = JSON.parse(await cache.get("books" + page));

  if (cached && cached.length) return cached;
  const allBooks = await BookModel.countDocuments({}, {});

  const books = await BookModel.find({}, {}, { lean: true, limit: totalBookOnPage, skip: page * totalBookOnPage });

  return { 
    data: books,
    total: allBooks,
    totalPage: Math.ceil(allBooks / totalBookOnPage),
  } 
}

async function getBookByTitle(title: string, page: number = 0) {
  // const cache: any = await redis();
  console.log('getByTitle');
  
  // const cached =  JSON.parse(await cache.get(title));

  // if (cached && cached.length) return cached;

  const count = await BookModel.countDocuments({
    $or: [
      { title: { $regex: title, $options: "i" } },
      { author: { $regex: title, $options: "i" } },
      { language: { $regex: title, $options: "i" } },
    ],
  }, {});

  const result = await BookModel.find({
    $or: [
      { title: { $regex: title, $options: "i" } },
      { author: { $regex: title, $options: "i" } },
      { language: { $regex: title, $options: "i" } },
    ],
  }, {}, { lean: true, limit: totalBookOnPage, skip: page * totalBookOnPage });

  if (!result.length) return { type: 404, message: "Nenhum título, autor ou linguagem encontrado" };
  
  // await cache.set(title, JSON.stringify(result));

  console.log({
    data: result,
    total: count,
    totalPage: Math.ceil(count / totalBookOnPage),
  }, 'result');

  return {
    data: result,
    total: count,
    totalPage: Math.ceil(count / totalBookOnPage),
  };
}

async function getOneBook(id: string) {
  const cache: any = await redis();
  console.log('getOneBook');

  const cached = JSON.parse(await cache.get(id));

  if (cached && cached.length) return cached;

  const result = await BookModel.findById({ _id: id }, {}, { lean: true });

  if (!result) return { type: 404, message: "Livro não encontrado" };

  await cache.set(id, JSON.stringify(result));

  return result;
}

async function getBooksByYearInterval(initialYear: string, finalYear: string, page: number = 0) {
  // const cache: any = await redis();
  console.log('getInterval');

  // const cached = JSON.parse(await cache.get(initialYear + finalYear));

  // if (cached && cached.length) return cached;

  const count = await BookModel.countDocuments({
    year: { $gte: initialYear, $lte: finalYear },
  });

  const result = await BookModel.find({
    year: { $gte: initialYear, $lte: finalYear },
  }, {}, { lean: true, limit: totalBookOnPage, skip: page * totalBookOnPage });

  if (!result.length) return { type: 404, message: "Nenhum livro encontrado nesse intervalo de anos" };

  // await cache.set(initialYear + finalYear, JSON.stringify(result));

  return {
    data: result,
    total: count,
    totalPage: Math.ceil(count / totalBookOnPage),
  }
}

export {
  getAllBooks,
  getBookByTitle,
  getOneBook,
  getBooksByYearInterval,
};
