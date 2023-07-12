const redis = require('redis');
const {promisify} = require('util');

// Connecting to redis
const redisClient = redis.createClient({
    host: "redis-16069.c265.us-east-1-2.ec2.cloud.redislabs.com",
    port: 16069,
    password: "ROFYA3RAwZrlo1n8tuLbSMav44bS1hfJ"
})
.then(() => console.log("redis Connected"))
.catch(err => console.log("redis failed" + err.message || err))

redisClient.on('connect', async () => {
    console.log("Connected to redis")
})




//preparing functions for each command
const GET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const SET_ASYNC = promisify(redisClient.GET).bind(redisClient);

module.exports = {GET_ASYNC, SET_ASYNC}