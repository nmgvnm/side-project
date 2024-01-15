const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    name: String,
    number: Number,
    code: String,
  },
  { versionKey: false }
);

const sideProject01 = mongoose.connection.useDb("side-project-01");
module.exports = Test = sideProject01.model("insertTest", dataSchema);
