"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authMiddleWare = void 0;

var _userModel = _interopRequireDefault(require("./models/userModel"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var authMiddleWare = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var tokenArray, token, _jwt$verify, id, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            tokenArray = req.headers.authorization;

            if (tokenArray) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.send({
              ok: false,
              error: "로그인이 필요한 기능입니다."
            }));

          case 3:
            if (!tokenArray) {
              _context.next = 21;
              break;
            }

            tokenArray = tokenArray.split(" ");

            if (!(tokenArray[0] !== "Bearer")) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.send({
              ok: false,
              error: "로그인이 필요한 기능입니다."
            }));

          case 7:
            _context.prev = 7;
            token = tokenArray[1];
            _jwt$verify = _jsonwebtoken["default"].verify(token, process.env.SECRET), id = _jwt$verify.id;
            _context.next = 12;
            return _userModel["default"].findOne({
              id: id
            }).populate("posts");

          case 12:
            user = _context.sent;
            res.locals.user = user;
            next();
            _context.next = 21;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](7);
            console.log(_context.t0);
            return _context.abrupt("return", res.send({
              ok: false,
              error: "로그인이 필요한 기능입니다."
            }));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[7, 17]]);
  }));

  return function authMiddleWare(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.authMiddleWare = authMiddleWare;