'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    let services = req.app.locals.services;

    services.countService.add((err)=>{
        if(err)
            return next(err);

        services.countService.get((err, count)=>{
            if(err)
                return next(err);

            res.json({'helloWorld': count });
        });
    });
});

module.exports = app;
