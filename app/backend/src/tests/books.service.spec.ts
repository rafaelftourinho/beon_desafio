import { expect } from 'chai';
import sinon from 'sinon';
import BookModel from '../models/Book.model';
import {
  getAllBooks,
  getBookByTitle,
  getOneBook,
  getBooksByYearInterval,
} from '../services/Book.service';
import { afterEach } from 'mocha';
import mockBooks from './mocks/mockBooks';

describe("BookService", () => {
  afterEach(sinon.restore);
  describe("BooksFunctions", () => {

    it('should return all books', async () => {
      // const cache: SinonStub = sinon.stub(redis, 'createClient').returns({
      //   get: sinon.stub().resolves(JSON.stringify(mockBooks)),
      // } as unknown as any);
      sinon.stub(BookModel, 'countDocuments').resolves(4);
      sinon.stub(BookModel, 'find').resolves(mockBooks);
      const result = await getAllBooks();
      
      expect(result.data).to.be.deep.equal(mockBooks);
      expect(result.total).to.be.equal(4);
      expect(result.totalPage).to.be.equal(1);
    });

    it('should return books by author', async () => {
      sinon.stub(BookModel, 'countDocuments').resolves(1);
      sinon.stub(BookModel, 'find').resolves([mockBooks[0]]);
      const result = await getBookByTitle(mockBooks[0].author);
      
      expect(result.data).to.be.deep.equal([mockBooks[0]]);
      expect(result.total).to.be.equal(1);
      expect(result.totalPage).to.be.equal(1);
    });

    it('should return books by title', async () => {
      sinon.stub(BookModel, 'countDocuments').resolves(1);
      sinon.stub(BookModel, 'find').resolves([mockBooks[0]]);
      const result = await getBookByTitle(mockBooks[0].title);
      
      expect(result.data).to.be.deep.equal([mockBooks[0]]);
      expect(result.total).to.be.equal(1);
      expect(result.totalPage).to.be.equal(1);
    });

    it('should return books by language', async () => {
      sinon.stub(BookModel, 'countDocuments').resolves(1);
      sinon.stub(BookModel, 'find').resolves([mockBooks[0]]);
      const result = await getBookByTitle(mockBooks[0].language);
      
      expect(result.data).to.be.deep.equal([mockBooks[0]]);
      expect(result.total).to.be.equal(1);
      expect(result.totalPage).to.be.equal(1);
    });

    it('should return a book', async () => {
      sinon.stub(BookModel, 'findById').resolves(mockBooks[0]);
      const result = await getOneBook(mockBooks[0].id);
      
      expect(result).to.be.deep.equal(mockBooks[0]);
    });

    it('should return books by year interval', async () => {
      sinon.stub(BookModel, 'countDocuments').resolves(2);
      sinon.stub(BookModel, 'find').resolves([mockBooks[0], mockBooks[1]]);
      const result = await getBooksByYearInterval('1836', '1958');
      
      expect(result.data).to.be.deep.equal([mockBooks[0], mockBooks[1]]);
      expect(result.total).to.be.equal(2);
      expect(result.totalPage).to.be.equal(1);
    });
  });
});
