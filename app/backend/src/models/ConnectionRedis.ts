import { Client } from 'redis-om'

const RedisClient = new Client()

const url = process.env.REDIS_URL || 'redis://redis-cache:6379'
RedisClient.open(url)
  .then(() => console.log('Redis connected'));

RedisClient.execute(['PING'])
  .then((result) => console.log(result));

export default RedisClient;
