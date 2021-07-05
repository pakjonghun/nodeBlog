"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _joi = require("joi");

var _globalController = require("../controllers/globalController");

var _middleWare = require("../middleWare");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get("/", _globalController.home);
globalRouter.get("/me", _middleWare.authMiddleWare, _globalController.meApi);
globalRouter.get("/isMine/:commentId", _middleWare.authMiddleWare, _globalController.isMine);
globalRouter.route("/join").get(_globalController.getJoin).post(_globalController.postJoin);
globalRouter.route("/login").get(_globalController.getLogin).post(_globalController.postLogin);
var _default = globalRouter;
exports["default"] = _default;