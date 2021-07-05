"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _postController = require("../controllers/postController");

var _middleWare = require("../middleWare");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postRouter = _express["default"].Router();

postRouter.route("/add").get(_postController.getAddPost).all(_middleWare.authMiddleWare).post(_postController.postAddPost);
postRouter.get("/:id", _postController.detail);
var _default = postRouter;
exports["default"] = _default;