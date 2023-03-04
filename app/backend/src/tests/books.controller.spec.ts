import { expect } from 'chai';
import sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import * as BookServices from '../services/Book.service';
import mockBooks from './mocks/mockBooks';
import sinonChai from 'sinon-chai';
import { getBooksController, getBookByTitleController, getOneBookController } from '../controllers/Books.controller';
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
      sinon.stub(BookServices, "getOneBook").resolves(mockBooks[0]);
      
      const res = {} as Response; 
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns({});

      const req = {
        params: {
          id: mockBooks[0].id,
        }
      } as unknown as Request;

      await getOneBookController(req, res);
      console.log(res.status);

      expect(res.status).to.have.be.calledWith(200);
      expect(res.json).to.have.be.calledWith(mockBooks[0]);
    });
  });
});
