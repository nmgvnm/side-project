const express = require("express"); // express import
const app = express();
const port = 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const password = encodeURIComponent("dldbswls77!");
const uri = `mongodb+srv://yoonjin:${password}@cluster-side-project.ujdbqth.mongodb.net/?retryWrites=true&w=majority`;
const multer = require("multer");

// Multer 설정
const storage = multer.memoryStorage();

mongoose
  .connect(uri)
  .then(() => console.log("mongoose로 mongodb 연결됨"))
  .catch((err) => console.error("mongoose로 mongodb 연결 실패", err));

app.use(bodyParser.json()); // JSON 형식의 본문을 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 형식의 본문을 파싱
app.use(cors());
app.use(express.json({ extended: false }));
app.use(express.json());

// app.post API

// app.get API

// app.put API

// app.patch API

// app.delete API

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행중입니다.`);
});
