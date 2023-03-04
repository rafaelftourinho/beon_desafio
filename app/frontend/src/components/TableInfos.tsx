import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import booksFetch from "../config/config";
import MainContext from "../Context/MainContext";

import "./TableInfos.css";


const TableInfos = () => {
  const navigate = useNavigate();
  const context: any = useContext(MainContext);
  const {
    search,
    setBookDetails,
    result,
    setBookYears,
    setSearch,
    booksFound,
  } = context;

  const { data } = result;

  useEffect(() => {
    setBookYears('');
  }, [search]);

  useEffect(() => {
    setSearch('');
  }, [booksFound]);

  const navigateToBooksDetails = async (id: string) => {
    try {
      const response = await booksFetch.get(`/id/${id}`);
      const { data } = response;

      await setBookDetails(data);

      navigate(`/book/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <table className="table">
      <caption>Books</caption>
      <thead className="table-head">
        <tr>
          <th>Livro</th>
          <th>Autor</th>
          <th>Idioma</th>
          <th>Ano</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        { data && data.length > 0 && data.map((book: any) => (
          <tr key={book._id} className="table-line">
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.language}</td>
            <td>{book.year}</td>
            <td>
              <button
                onClick={ () => navigateToBooksDetails(book._id) }
                className="form-btn"
              >
                <Link
                  to={`/book/${book._id}`}
                  className="details"
                >
                  Detalhes
                </Link>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}

export default TableInfos;
