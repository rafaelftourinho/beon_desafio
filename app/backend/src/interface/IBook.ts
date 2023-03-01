interface IBook {
  model: any;
  author: string;
  title: string;
  year: number;
  pages: number;
  country: string;
  language: string;
  link: string;
  imageLink: string;
  getQuery: Function;
}

export default IBook;
