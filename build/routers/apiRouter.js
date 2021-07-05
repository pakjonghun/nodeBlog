"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _globalController = require("../controllers/globalController");

var _postController = require("../controllers/postController");

var _middleWare = require("../middleWare");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiRouter = _express["default"].Router();

apiRouter.get("/", _globalController.homeApi);
apiRouter.get("/:id", _postController.postDetail);
var _default = apiRouter;
exports["default"] = _default;