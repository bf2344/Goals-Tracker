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

app.get('/tickets/urgent', function (req, res) {
    res.json({
        min: 0,
        max: 24,
        value: Math.floor(Math.random() * 5)
    })
});

app.get('/tickets/progression', function (req, res) {
    let labels = ["Open Goals", "Closed Goals", "Goals on Hold"];
    let colors = ["#e74c3c", "#27ae60", "blue"];
    let values = [];

    labels.forEach((label, index) => {
        let data = [];
        for(let i = 0; i < 7; i++) {
            data.push(Math.floor(Math.random() * 10) + i);
        }

        values.push({
            label,
            data,
            color: colors[index]
        });

    });
    console.log(values)

    res.json(values);
});

app.get('/tickets/*', function (req, res) {
    res.json({
        value: Math.floor(Math.random() * 10) + 1
    })
});

app.get('/stats/top', function (req, res) {
    res.json([
        {
            label: "Create Data Spreadsheet",
            value: Math.floor(Math.random() * 5) + 26
        },
        {
            label: "Save $5000",
            value: Math.floor(Math.random() * 5) + 13
        },
        {
            label: "Buy a Car",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "Buy a House",
            value: Math.floor(Math.random() * 5) + 19
        },
        {
            label: "Get a Job",
            value: Math.floor(Math.random() * 5) + 4
        },
        {
            label: "I cant think of another goal",
            value: Math.floor(Math.random() * 5) + 12
        },
        {
            label: "Buy a Car again",
            value: Math.floor(Math.random() * 5) + 18
        },
        {
            label: "I do not know",
            value: Math.floor(Math.random() * 5) + 7
        }
    ]);    
});

app.get('/stats/*', function (req, res) {
    res.json({
        min: 0,
        max: 100,
        value: Math.floor(Math.random() * 25) + 50
    });
});

app.listen(PORT, function () {
    console.log('Data being served from http://localhost:3001');
});