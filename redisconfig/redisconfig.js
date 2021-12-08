require('dotenv').config()

const redis = require('redis');

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});
client.connect();
client.on("connect", function () {
    console.log("Redis Connected!");
});

exports.set = async (key, data) => {

    let result = await client.set(key, data)
    console.log(key, data);
    return result;
}

exports.del = async (key) => {
    await client.del(key)
    return true;
}
exports.redisTokenCheck = async (key,next) => {
    const token = await client.exists(key)
    console.log(token);
    /*if (token==)
        return res.json('Login please!')
    */next();
}