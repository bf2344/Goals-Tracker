const router = require("express").Router()

router.get('/goals/urgent', function (req, res) {
    res.json({
        min: 0,
        max: 24,
        value: Math.floor(Math.random() * 5)
    })
});

router.get('/goals/progression', function (req, res) {
    let labels = ["Open Goals", "Closed Goals", "Goals on Hold"];
    let colors = ["red", "green", "orange"];
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

router.get('/goals/*', function (req, res) {
    res.json({
        value: Math.floor(Math.random() * 10) + 1
    })
});

router.get('/stats/top', function (req, res) {
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

router.get('/goals/*', function (req, res) {
    res.json({
        min: 0,
        max: 100,
        value: Math.floor(Math.random() * 25) + 50
    });
});

module.exports = router;