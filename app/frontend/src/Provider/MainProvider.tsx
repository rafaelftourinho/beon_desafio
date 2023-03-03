import React, { useState } from "react";
import PropTypes from "prop-types";
import MainContext from "../Context/MainContext";
import booksFetch from "../config/config";

function MainProvider({ children }: any) {
  const [books, setBooks] = useState([]);
  const [bookYears, setBookYears] = useState([]);
  const [booksFound, setBooksFound] = useState([]);
  const [searched, setSearched] = React.useState({});
  const [bookDetails, setBookDetails] = useState({});
  const [result, setResult] = useState([]);
  const [targetSearch, setTargetSearch] = useState('all');
  const [search, setSearch] = React.useState<string>("");

  const getSearchedBooks = async (page: number) => {
    console.log(page);
    
    switch (targetSearch) {
      case 'title':
        return await getBookByTitle(page)
      case 'date':
        return await getBookByDate(page)
      default:
        return await getBooks(page)
    } 
  }

  const getBookByTitle = async (page: number = 0) => {
    const response = await booksFetch.get(`/title/${search}/?page=${page}`);
    const { data } = response;
    console.log(response.data);
    setResult(data);
  }

  const getBooks = async (page: number) => {
    try {
      const response = await booksFetch.get(`/?page=${page}`);
      const { data } = response;

      setResult(data);
    } catch (error) {
      console.log('error');
    }
  }

  const getBookByDate = async (page: number = 0) => {
    try {
      const response = await booksFetch.get(`/year/${bookYears[0]}/${bookYears[1]}/?page=${page}`);
      const { data } = response;

      setResult(data);
    } catch (error) {
      console.log('error');
    }
  }
  
  const value = ({
    books,
    setBooks,
    searched,
    setSearched,
    bookYears,
    setBookYears,
    booksFound,
    setBooksFound,
    bookDetails,
    setBookDetails,
    result,
    setResult,
    targetSearch,
    setTargetSearch,
    search,
    setSearch,
    getSearchedBooks,
  });

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
