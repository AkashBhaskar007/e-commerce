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
    return result;
}

exports.del = async (key) => {
    await client.del(key)
    return true;
}
exports.redisAdminTokenCheck = async (req, res, next) => {
    const token = await client.exists('adminToken')
    if (!token)
        return res.json('Login please!')
    next();
}
exports.redisUserLoginTokenCheck = async (req, res, next) => {
    const token = await client.exists('userToken')
    if (token)
        return res.json('Currently logged in! Please logout and login again!')
    next();
}
exports.redisAdminLoginTokenCheck = async (req, res, next) => {
    const token = await client.exists('adminToken')
    if (token)
        return res.json('Currently logged in! Please logout and login again!')
    next();
}
exports.redisUserTokenCheck = async (req, res, next) => {
    const token = await client.exists('userToken')
    if (!token)
        return res.send('Login please!')
    next();
}