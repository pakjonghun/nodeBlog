"use strict";

require("dotenv/config");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect("mongodb://localhost:27017/col", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})["catch"](function (err) {
  return console.log(err);
});

var db = _mongoose["default"].connection;
db.on("error", function (err) {
  return console.log(err);
});
db.once("open", function () {
  return console.log("DB is running ");
});