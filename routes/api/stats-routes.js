const router = require('express').Router()

router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(process.argv.includes("delayresponse")) {
      setTimeout(function(){
          next();
      }, 2000);
  } else {
      next();
  }
});

router.get('/top', function (req, res) {
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

router.get('/*', function (req, res) {
  res.json({
      min: 0,
      max: 100,
      value: Math.floor(Math.random() * 25) + 50
  });
});

module.exports = router;