import React, { useState } from "react";
import PropTypes from "prop-types";
import MainContext from "../Context/MainContext";

function MainProvider({ children }: any) {
  const [books, setBooks] = useState([]);
  const [searched, setSearched] = React.useState<any>({});
  
  const value = ({
    books,
    setBooks,
    searched,
    setSearched,
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
