'use strict';

const helper = require("./helper.js");

const redis = require("redis");
const client = redis.createClient({
    host: (process.env.DOCKER_DEMO_REDIS_HOST || 'redis')
});

client.on("error", (err) => {
    console.log("Error " + err);
});

module.exports.add = (callback) => {
    client.get("count", (err, reply)=>{
        if (err){
            console.log(err);
            return callback(new Error('Unable to add!'));
        }
        console.log(reply);
        client.set("count", helper.addOne(reply), callback);
    });

    return;
}

module.exports.get = (callback) => {
    client.get("count", (err, reply)=>{
        if (err){
            console.log(err);
            return callback(new Error('Unable to get!'));
        }
        console.log(reply);
        callback(null, parseInt(reply));
    });
}
