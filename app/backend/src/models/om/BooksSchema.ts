import { Entity, Schema } from 'redis-om';
import RedisClient from '../ConnectionRedis';

class Books extends Entity{};

const redisSchema = new Schema(Books, {
  author: { type: 'string' },
  title: { type: 'string' },
  year: { type: 'number' },
  pages: { type: 'number' },
  country: { type: 'string' },
  language: { type: 'string' },
  link: { type: 'string' },
  imageLink: { type: 'string' },
});

const booksRepository = RedisClient.fetchRepository(redisSchema);

// booksRepository.createIndex()
//   .then(() => console.log('Index created'));

export default booksRepository;
