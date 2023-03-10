import { expect } from 'chai';
import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import * as BookServices from '../services/Book.service';
import mockBooks, { oneBook } from './mocks/mockBooks';
import sinonChai from 'sinon-chai';
import { getBooksController, getBookByTitleController, getOneBookController, getBooksByYearIntervalController } from '../controllers/Books.controller';
import { Request, Response } from 'express';

chai.use(chaiHttp)
chai.use(sinonChai);

describe("BookController", () => {

  afterEach(sinon.restore);

  describe("getAllBooks", () => {

    it('should return all books', async () => {
      sinon.stub(BookServices, "getAllBooks").resolves({
        total: 4,
        totalPage: 1,
        data: mockBooks,
      });
      
      const res = {} as Response; 
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      const req = {
        query: {
          page: 0,
        },
      } as unknown as Request;

      await getBooksController(req, res);


      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith({
        total: 4,
        totalPage: 1,
        data: mockBooks,
      });
    });
  });

  describe("getBookByTitle", () => {
      
      it('should return books by title, author or language', async () => {
        sinon.stub(BookServices, "getBookByTitle").resolves({
          total: 1,
          totalPage: 1,
          data: [mockBooks[0]],
        });
        
        const res = {} as Response; 
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns({});
  
        const req = {
          query: {
            page: 0,
          },
          params: {
            title: mockBooks[0].title,
          }
        } as unknown as Request;
  
        await getBookByTitleController(req, res);

        expect(res.status).to.have.be.calledWith(200);
        expect(res.json).to.have.be.calledWith({
          total: 1,
          totalPage: 1,
          data: [mockBooks[0]],
        });
      });
  });

  describe("getOneBook", () => {
      
    it('should return one book', async () => {
      sinon.stub(BookServices, "getOneBook").resolves(oneBook);
      
      const res = {} as Response; 
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      const req = {
        params: {
          id: oneBook.id,
        }
      } as unknown as Request;

      await getOneBookController(req, res);

      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith(oneBook);
    });
  });

  describe("getBooksByYearInterval", () => {

    it('should return books by year interval', async () => {
      sinon.stub(BookServices, "getBooksByYearInterval").resolves({
        total: 1,
        totalPage: 1,
        data: [mockBooks[0]],
      });
      
      const res = {} as Response; 
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      const req = {
        query: {
          page: 0,
        },
        params: {
          year1: mockBooks[0].year,
          year2: mockBooks[0].year,
        }
      } as unknown as Request;

      await getBooksByYearIntervalController(req, res);

      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith({
        total: 1,
        totalPage: 1,
        data: [mockBooks[0]],
      });
    });
  });
});
