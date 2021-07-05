"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _socket = _interopRequireDefault(require("socket.io"));

var _http = _interopRequireDefault(require("http"));

var _globalRouter = _interopRequireDefault(require("./routers/globalRouter"));

var _postRouter = _interopRequireDefault(require("./routers/postRouter"));

var _morgan = _interopRequireDefault(require("morgan"));

var _apiRouter = _interopRequireDefault(require("./routers/apiRouter"));

var _commentsRouter = _interopRequireDefault(require("./routers/commentsRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

app.set("view engine", "ejs");
app.set("views", process.cwd() + "/src/views");
app.use(_express["default"].json());
app.use((0, _morgan["default"])("tiny"));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/static", _express["default"]["static"](process.cwd() + "/assets"));
app.use("/post/static", _express["default"]["static"](process.cwd() + "/assets"));
app.use("/", _globalRouter["default"]);
app.use("/post", _postRouter["default"]);
app.use("/comment", _commentsRouter["default"]);
app.use("/api", _apiRouter["default"]);
var _default = server;
exports["default"] = _default;