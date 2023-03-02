import BookModel from "../models/Book.model";
import redis from "../models/ConnectionRedis";

async function getAllBooks() {
  const cache: any = await redis();

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

  if (!result.length) return { message: "Nenhum título, autor ou linguagem encontrado" };
  
  await cache.set(title, JSON.stringify(result));

  return result;
}

//TODO tratar o que volta do frontend em relação aos espaços em branco;
// const strings = (str: string) => {
//   return str.split('+').join('');
// }

//TODO fazer a função getOneBook(id: string); TENDO PROBLEMAS COM A FUNÇÃO!
async function getOneBook(id: string) {
  const cache: any = await redis();

  const cached = JSON.parse(await cache.get(id));

  if (cached && cached.length) return cached;

  const result = await BookModel.findById({ _id: id }, {}, { lean: true });

  if (!result) return { message: "Livro não encontrado" };

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

  if (!result.length) return { message: "Nenhum livro encontrado nesse intervalo de anos" };

  await cache.set(initialYear + finalYear, JSON.stringify(result));

  return result;
}

export {
  getAllBooks,
  getBookByTitle,
  getOneBook,
  getBooksByYearInterval,
};
