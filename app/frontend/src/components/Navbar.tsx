import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import booksFetch from "../config/config";
import MainContext from "../Context/MainContext";

import './Navbar.css'

const Navbar = () => {
  const context: any = useContext(MainContext);
  const {
    bookYears,
    setResult,
    search,
    setTargetSearch,
    getSearchedBooks,
    setSearch,
  } = context;
  
  const [inputSearch, setInputSearch] = React.useState<string>('');

  const getBooks = async () => {
    try {
      const response = await booksFetch.get('/');
      const { data } = response;
      
      setResult(data);
    } catch (error) {
      console.log('error');
    }
  }

  useEffect (() => {
    if (bookYears[0]  && bookYears[1]) {
      setTargetSearch('date');
    } else if (search) {
      setTargetSearch('title');
    } else {
      setTargetSearch('all');
    }
  }, [inputSearch, bookYears]);
  
  useEffect(() => {
    getBooks();
  },[]);
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <nav className="">
      <div className="navbar">
        <h2 className="logo">
          <Link to="/">beon</Link>
        </h2>
        <input
          type="text"
          className="input-search"
          placeholder="Busque livros pelo título, autor ou idioma"
          value={ inputSearch }
          onChange={ handleSearch }
        />
        <button
        className="new-btn"
        onClick={ () => getSearchedBooks(0) }>
          Buscar
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
