import BookModel from "../models/Book.model";
import redis from "../models/ConnectionRedis";

async function getAllBooks() {
  const cache: any = await redis();

  const cached =  JSON.parse(await cache.get("books"));
  console.log(cached);
  
  if (cached && cached.length) return cached;

  const books = await BookModel.find({}, {}, { lean: true });

  await cache.set("books", JSON.stringify(books));

  return books;
}

async function getBookByTitle(title: string) {
  const cache: any = await redis();
  
  
  const cached =  JSON.parse(await cache.get(title));
  console.log(cached);

  if (cached && cached.length) return cached;

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

//TODO tratar o que volta do frontend em relação aos espaços em branco;
// const strings = (str: string) => {
//   return str.split('+').join('');
// }

//TODO fazer a função getOneBook(id: string);

//TODO fazer a função getBooksByYearInterval(objeto com ano inicial e ano final);

export {
  getAllBooks,
  getBookByTitle,
};
