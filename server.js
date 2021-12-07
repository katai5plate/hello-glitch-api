const app = require("express")();

let localDB = [];
let count = 0;
let bootDate = null;

app.listen(3000, () => {
  console.log("http://localhost:3000/");
  bootDate = new Date().toISOString();
});

app.get("/", (req, res) => {
  count++;
  localDB = [
    ...localDB,
    {
      count,
      headers: req.headers,
      query: req.query,
      time: new Date().toISOString(),
    },
  ].slice(-20);
  res.json({
    hello: "world",
    bootTime: bootDate,
    db: localDB,
  });
});

app.get("/log", (req, res) => {
  res.json({
    hello: "world",
    bootTime: bootDate,
    db: localDB,
  });
});
