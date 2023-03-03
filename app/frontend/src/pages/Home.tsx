import React, { useContext } from "react";
import TableInfos from "../components/TableInfos";
import MainContext from "../Context/MainContext";

const Home = () => {
  const context: any = useContext(MainContext);
  const { books, booksFound, searched } = context;
  return (
    <TableInfos />
  )
}

export default Home;
