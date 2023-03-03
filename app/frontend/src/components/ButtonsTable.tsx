import React, { useContext } from "react"
import MainContext from "../Context/MainContext";

import './ButtonsTable.css';

const ButtonsTable = () => {
  const context: any = useContext(MainContext);
  const { result, getSearchedBooks } = context;
  const totalPages = Array(result.totalPage).fill(0).map((_, index) => index + 1);


  return (
    <div className="table">
      {totalPages.map((index) => (
        <button
          key={index}
          onClick={() => getSearchedBooks(index - 1) }
        >
          {index}
        </button>
      )) }
    </div>
  )
}

export default ButtonsTable;
