import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../Context/MainContext";

import './BookInfos.css';

const BookInfos = () => {
  const context: any = useContext(MainContext);
  const { bookDetails } = context;

  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  }

  return (
    <div className="infos-container">
      <div className="book-infos">
        <h1>Título: {bookDetails.title}</h1>
        <h2>Autor: {bookDetails.author}</h2>
        <p>Ano: {bookDetails.year}</p>
        <p>Idioma: {bookDetails.language}</p>
        <p>País: {bookDetails.country}</p>
        <p>Nº de páginas: {bookDetails.pages}</p>
        <p className="book-link">
          <span>Wiki: </span>
          <Link to={bookDetails.link} target="_blank">
          {bookDetails.link}
          </Link>
        </p>
        //! VERIFICAR COMO COLOCAR A IMAGEM PRA FUNCIONAR 
        {/* <img src={bookDetails.imageLink} className="book-image"/> */}
        <button onClick={ backToHome } className="back-to-home">
          Voltar
        </button>
      </div>
    </div>
  )
}

export default BookInfos;
