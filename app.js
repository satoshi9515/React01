// app.js

import express from "express";
import { omikujiRouter } from "./routes/omikuji.route.js";
import { jankenRouter } from "./routes/janken.route.js";

const app = express();
// 🔽 追加 POSTでデータを受け取るために必要
app.use(express.urlencoded({ extended: true }));
// 🔽 追加 JSONデータを使用するために必要
app.use(express.json());

const port = 3001;

// 🔽 編集
app.get("/", (req, res) => {
  res.json({
    uri: "/",
    message: "Hello Node.js!",
  });
});

// 🔽 追加 おみくじのルーティングを変更
app.use("/omikuji", (req, res) => omikujiRouter(req, res));
// 🔽 追加 じゃんけんのルーティングを追加
app.use("/janken", (req, res) => jankenRouter(req, res));


// 🔽 追加
app.get("/janken", (req, res) => {
  res.json({
    uri: "/janken",
    message: "This is Janken URI!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
