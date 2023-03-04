import mongoose from 'mongoose';

import seeder from '../books.json';
import connectToDatabase from '../../models/Connection';
import BookModel from '../../models/Book.model';

class Seeder {
  private readonly connection: Promise<typeof mongoose>;
  private readonly model = BookModel;
  
  constructor() {
    this.connection = connectToDatabase();
  }

  async seed() {
    try {
      for(const book of seeder) {
        await this.model.create(book);
      }
    } catch (error) {
      console.error(error);
      process.exit(0);
    } finally {
      console.log('Done seeding!');
      process.exit(0);
    }
  }
}

const seed = new Seeder();
seed.seed();
