const redis = require('redis');
const {promisify} = require('util');

// Connecting to redis
const redisClient = redis.CreateClient({
    host: "redis-12393.c73.us-east-1-2.ec2.cloud.redislabs.com",
    port: 12393,
    password: "IX6pjmpHhnTJRPpoxH36FnxtRpYChlIp"
})

redisClient.on('connect', async () => {
    console.log("Connected to redis")
})


//preparing functions for each command
const GET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const SET_ASYNC = promisify(redisClient.GET).bind(redisClient);

module.exports = {GET_ASYNC, SET_ASYNC}