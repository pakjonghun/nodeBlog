"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var commentSchema = new _mongoose["default"].Schema({
  createdAt: {
    type: Date,
    "default": Date.now,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  post: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: "Post"
  }
});

var _default = _mongoose["default"].model("Comment", commentSchema);

exports["default"] = _default;