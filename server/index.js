const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello From Server!" });
// });

app.post("/data/api", (req, res) => {
  //   console.log(req.body);
  //   let name = req.body.name;
  //   let id = req.body.id;
  //   let amount = req.body.amount;
  //   let date = req.body.date;
  //   let data = {
  //     name,
  //     id,
  //     amount,
  //     date,
  //   };
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
