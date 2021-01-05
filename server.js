const express = require('express');
const app = express();
const PORT = 3001

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(process.argv.includes("delayresponse")) {
        setTimeout(function(){
            next();
        }, 2000);
    } else {
        next();
    }
});

app.use(require("./routes/api"))


app.listen(PORT, function () {
    console.log('Data being served from http://localhost:3001');
});