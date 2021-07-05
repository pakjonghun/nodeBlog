"use strict";

require("regenerator-runtime");

require("dotenv/config");

var _app = _interopRequireDefault(require("./app"));

require("./models/userModel");

require("./db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 5000;

_app["default"].listen(port, function () {
  return console.log("server is running on ".concat(port));
});