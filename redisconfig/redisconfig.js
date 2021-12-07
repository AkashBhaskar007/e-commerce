require('dotenv').config()

const redis = require('redis');

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});
client.connect();
client.on("connect", function () {
    console.log("Connected!");
});

exports.set = async (key, data) => {
 
   let result = await client.set(key, data)
    /*  let result2 = await client.get(key)
      console.log(result2);
      
      */
    console.log(key, data);
    return result;
}
exports.get = async (key) => {
    const data = await client.get(key)
    return data;
}