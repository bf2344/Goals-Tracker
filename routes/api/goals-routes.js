const router = require('express').Router()

router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  if(process.argv.includes("delayresponse")) {
      setTimeout(function(){
          next();
      }, 2000);
  } else {
      next();
  }
});

router.get('/urgent', function (req, res) {
  res.json({
      min: 0,
      max: 24,
      value: Math.floor(Math.random() * 5)
  })
});

router.get('/progression', function (req, res) {
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

router.get('/*', function (req, res) {
  res.json({
      value: Math.floor(Math.random() * 10) + 1
  })
});

module.exports = router