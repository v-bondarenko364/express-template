import bluebird from 'bluebird';
import redis from 'redis';

interface AsyncRedisClient extends redis.RedisClient {
  getAsync: (key: string) => Promise<string>;

  setAsync: (key: string, value: string) => Promise<string>;
  expireAsync: (key: string, seconds: number) => Promise<number>;

  delAsync: (key: string) => Promise<number>;
}

// Promisify all methods
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

/**
 * Redis client.
 */
const client = redis.createClient(process.env.REDIS_URL) as AsyncRedisClient;

export default class RedisService {
  public static get client(): AsyncRedisClient {
    return client;
  }
}
