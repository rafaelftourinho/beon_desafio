import { createClient } from "redis";

const redis = async () => 
  await new Promise(async (resolve, reject) => {
    const options = {
      url: "redis://redis-cache:6379",
    };

    const client = await Promise.resolve(createClient(options));

    client.on("error", (err) => {
      console.log("Redis error", err);
      reject(err);
    });
    
    await client.connect();
    resolve(client);
  })

export default redis;
