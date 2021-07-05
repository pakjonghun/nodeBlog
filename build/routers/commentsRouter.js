"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentController = require("../controllers/commentController");

var _middleWare = require("../middleWare");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var commentsRouter = _express["default"].Router();

commentsRouter.post("/add", _middleWare.authMiddleWare, _commentController.addComment);
commentsRouter.patch("/edit", _middleWare.authMiddleWare, _commentController.editComment);
commentsRouter["delete"]("/delete", _middleWare.authMiddleWare, _commentController.delComment);
var _default = commentsRouter;
exports["default"] = _default;