const express = require("express");
const router = require("./router");

//import cors
const cors = require("cors");

const app = express();

//pake cors nya
app.use(cors());
app.use(express.json());

app.use("/", require("./router"));

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
