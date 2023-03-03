import React, { useContext } from "react"
import MainContext from "../Context/MainContext";

import './ButtonsTable.css';

const ButtonsTable = () => {
  const context: any = useContext(MainContext);
  const { result, getSearchedBooks } = context;
  const totalPages = Array(result.totalPage).fill(0).map((_, index) => index + 1);
  console.log(totalPages);


  return (
    <div className="table">

      {totalPages.map((index) => (
        <button onClick={() => getSearchedBooks(index - 1) }>
          {index}
        </button>
      )) }
      {/* ButtonsTable
      <button
        className="new-btn table-btn"
        onClick={ () => SearchAllBooks() }
      >
        Todos os livros
      </button> */}
    </div>
  )
}

export default ButtonsTable;
