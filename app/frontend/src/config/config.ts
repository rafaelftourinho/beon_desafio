import axios from "axios";

const booksFetch = axios.create({
  baseURL: "http://localhost:3001/books",
  headers: {
    "Content-Type": "application/json",
  }
});

export default booksFetch;
