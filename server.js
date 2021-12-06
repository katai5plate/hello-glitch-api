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
      ip: req.ip,
      query: req.query,
      time: new Date().toISOString(),
    },
  ].slice(-5);
  res.json({
    hello: "world",
    bootTime: bootDate,
    db: localDB,
  });
});
