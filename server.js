const express = require('express');
const app = express();
const PORT = 3001
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

app.listen(PORT, function () {
    console.log('Data being served from http://localhost:3001');
});