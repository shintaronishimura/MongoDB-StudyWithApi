const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/foodRoutes");

app.use(foodRouter);

mongoose
  .connect(
    "mongodb+srv://shintaro:0203Peko@cluster0.sbonyye.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("データベース接続に成功しました。"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("サーバーが起動しました。");
});
