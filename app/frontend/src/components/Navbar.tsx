import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import booksFetch from "../config/config";

import './Navbar.css'

const Navbar = () => {
  const [books, setBooks] = React.useState<any[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const [searched, setSearched] = React.useState<boolean>(false);

  const getBooks = async () => {
    try {
      const response = await booksFetch.get('/');
      const { data } = response;
      
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  }
  
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
        <button className="new-btn">
          Buscar
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
