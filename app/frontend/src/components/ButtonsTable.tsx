import React, { useContext } from "react"
import booksFetch from "../config/config";
import MainContext from "../Context/MainContext";

import './ButtonsTable.css';

const ButtonsTable = () => {
  const context: any = useContext(MainContext);
  const { books } = context;
  const [allBooks, setAllBooks] = React.useState<any>([]);

  const SearchAllBooks = async () => {
    // carregar todos os livros novamente
  }
  return (
    <div className="table">
      ButtonsTable
      <button
        className="new-btn table-btn"
        onClick={ () => SearchAllBooks() }
      >
        Todos os livros
      </button>
    </div>
  )
}

export default ButtonsTable;
