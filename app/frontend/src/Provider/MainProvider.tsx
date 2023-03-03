import React, { useState } from "react";
import PropTypes from "prop-types";
import MainContext from "../Context/MainContext";

function MainProvider({ children }: any) {
  const [books, setBooks] = useState([]);
  const [bookYears, setBookYears] = useState([]);
  const [booksFound, setBooksFound] = useState([]);
  const [searched, setSearched] = React.useState({});
  
  const value = ({
    books,
    setBooks,
    searched,
    setSearched,
    bookYears,
    setBookYears,
    booksFound,
    setBooksFound,
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
