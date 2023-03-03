import React, { useCallback, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import booksFetch from "../config/config";
import MainContext from "../Context/MainContext";

import './Navbar.css'

const Navbar = () => {
  const context: any = useContext(MainContext);
  const {
    setBooks,
    searched,
    setSearched,
    bookYears,
    setBooksFound,
    setBookYears,
  } = context;
  
  const [search, setSearch] = React.useState<string>('');

  const getBooks = async () => {
    try {
      const response = await booksFetch.get('/');
      const { data } = response;
      
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getSearchedBooks = useCallback(async () => {
    if (bookYears[0] === '' && bookYears[1] === '' || !searched) {
      try {
        const response = await booksFetch.get(`/title/${search}`);
        const { data } = response;
        
        await setSearched(data);
        setSearch('');
        await setBooksFound('');
        await setBookYears(['', '']);
      } catch (error) {
        console.log(error);
      } 
    } else {
      try {
        const response = await booksFetch.get(`/year/${bookYears[0]}/${bookYears[1]}`);
        const { data } = response;

        await setBooksFound(data);
        await setSearched('');
        await setBookYears(['', '']);
      } catch (error) {
        console.log(error);
      }
    }
  }, [search, bookYears]);
  
  useEffect(() => {
    getBooks();
  },
  []);
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          value={ search }
          onChange={ handleSearch }
        />
        <button
        className="new-btn"
        onClick={ () => getSearchedBooks() }>
          Buscar
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
