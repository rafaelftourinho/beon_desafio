import React, { useContext } from "react";
import MainContext from "../Context/MainContext";


const TableInfos = () => {
  const context: any = useContext(MainContext);
  const { books, booksFound, searched } = context;

  const searchedOrBooks = searched.length ? searched : booksFound;
  const booksInfos = (searched.length || booksFound.length) ? searchedOrBooks : books;
  console.log(booksInfos);
  return (
    <table>
      <caption>Books</caption>
      <thead>
        <tr>
          <th>Livro</th>
          <th>Autor</th>
          <th>Idioma</th>
          <th>Ano</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        { booksInfos.length > 0 && booksInfos.map((book: any) => (
          <tr key={book._id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.language}</td>
          <td>{book.year}</td>
          <td></td>
        </tr>
        ))}
      </tbody>
    </table>

  )
}

export default TableInfos;
