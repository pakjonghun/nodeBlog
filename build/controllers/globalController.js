"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = pow;
exports.isMine = exports.meApi = exports.homeApi = exports.home = exports.postLogin = exports.getLogin = exports.postJoin = exports.getJoin = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _joi = _interopRequireDefault(require("joi"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _postModel = _interopRequireDefault(require("../models/postModel"));

var _commentModel = _interopRequireDefault(require("../models/commentModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getJoin = function getJoin(req, res) {
  res.render("join.ejs", {
    title: "회원가입"
  });
};

exports.getJoin = getJoin;

var postJoin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, id, password, passwordConfirm, schema, user, _schema$validate, _, error, errorPath, resul, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, password = _req$body.password, passwordConfirm = _req$body.passwordConfirm;

            if (!(password !== passwordConfirm)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.send({
              ok: false,
              error: "비밀번호를 다시 확인하세요"
            }));

          case 3:
            if (!password.includes(id)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.send({
              ok: false,
              error: "비밀번호에 닉네임이 포함 될 수 없습니다."
            }));

          case 5:
            schema = _joi["default"].object({
              id: _joi["default"].string().min(3).pattern(new RegExp("^[a-zA-z0-9]")),
              password: _joi["default"].string().min(4)
            });
            _context.prev = 6;
            _context.next = 9;
            return _userModel["default"].exists({
              id: id
            });

          case 9:
            user = _context.sent;
            console.log(user);

            if (!user) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.send({
              ok: false,
              error: "중복된 닉네임 입니다.."
            }));

          case 13:
            _schema$validate = schema.validate({
              id: id,
              password: password
            }), _ = _schema$validate._, error = _schema$validate.error;

            if (!error) {
              _context.next = 18;
              break;
            }

            errorPath = error["details"][0]["path"][0];
            console.log(error);
            return _context.abrupt("return", res.send({
              ok: false,
              error: "".concat(errorPath, "\uB97C \uB2E4\uC2DC \uD655\uC778\uD558\uC138\uC694")
            }));

          case 18:
            _context.next = 20;
            return _userModel["default"].create({
              id: id,
              password: password
            });

          case 20:
            resul = _context.sent;
            console.log(resul);
            token = _jsonwebtoken["default"].sign({
              id: id
            }, process.env.SECRET);
            return _context.abrupt("return", res.send({
              ok: true,
              data: token
            }));

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](6);
            console.log(_context.t0);
            return _context.abrupt("return", res.send({
              ok: false,
              error: "서버 오류가 발생했습니다."
            }));

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 26]]);
  }));

  return function postJoin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postJoin = postJoin;

var getLogin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res.render("login", {
              title: "로그인"
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getLogin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getLogin = getLogin;

var postLogin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body2, id, password, user, isPasswordCorrect, token;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, id = _req$body2.id, password = _req$body2.password;
            console.log(id, password);
            _context3.prev = 2;
            _context3.next = 5;
            return _userModel["default"].findOne({
              id: id
            });

          case 5:
            user = _context3.sent;

            if (user) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.send({
              ok: false,
              error: "계정이 존재하지 않습니다."
            }));

          case 8:
            _context3.next = 10;
            return _bcrypt["default"].compare(password, user.password);

          case 10:
            isPasswordCorrect = _context3.sent;
            console.log(user.password);
            console.log(isPasswordCorrect);

            if (isPasswordCorrect) {
              _context3.next = 15;
              break;
            }

            return _context3.abrupt("return", res.send({
              ok: false,
              error: "계정정보가 틀립니다."
            }));

          case 15:
            token = _jsonwebtoken["default"].sign({
              id: id
            }, process.env.SECRET);
            return _context3.abrupt("return", res.send({
              ok: true,
              data: token
            }));

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](2);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.send({
              ok: false,
              error: "서버 오류가 발생했습니다."
            }));

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 19]]);
  }));

  return function postLogin(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.postLogin = postLogin;

var home = function home(req, res) {
  return res.render("index.ejs", {
    title: "메인화면"
  });
};

exports.home = home;

var homeApi = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var token, tokenArray, posts;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            token = req.headers.authorization;
            tokenArray = token.trim().split(" ");
            tokenArray.shift();
            _context4.next = 6;
            return _postModel["default"].find({}).sort({
              createdAt: -1
            });

          case 6:
            posts = _context4.sent;
            return _context4.abrupt("return", res.send({
              ok: true,
              data: posts,
              error: null,
              user: tokenArray[0] !== "null" ? true : false
            }));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.send({
              ok: false,
              error: "서버에서 에러가 발생했어요."
            }));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function homeApi(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.homeApi = homeApi;

var meApi = function meApi(req, res) {
  try {
    var user = res.locals.user;
    return res.send({
      ok: !!user,
      data: user.id,
      user: user
    });
  } catch (e) {
    console.log(e);
    return res.send({
      ok: false,
      error: "서버 오류가 발생했습니다."
    });
  }
};

exports.meApi = meApi;

var isMine = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var user, commentId, comment, commentOwner, isMyComment;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            user = res.locals.user;
            commentId = req.params.commentId;
            _context5.next = 5;
            return _commentModel["default"].findById(commentId);

          case 5:
            comment = _context5.sent;

            if (comment) {
              _context5.next = 8;
              break;
            }

            return _context5.abrupt("return", res.send({
              ok: 0,
              error: "댓글이 없습니다."
            }));

          case 8:
            commentOwner = comment.user;
            isMyComment = user.id === commentOwner;

            if (isMyComment) {
              _context5.next = 14;
              break;
            }

            return _context5.abrupt("return", res.send({
              ok: 2,
              error: "권한이 없습니다."
            }));

          case 14:
            if (!isMyComment) {
              _context5.next = 16;
              break;
            }

            return _context5.abrupt("return", res.send({
              ok: true
            }));

          case 16:
            _context5.next = 22;
            break;

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.send({
              ok: 1,
              error: "서버에서 오류가 발생했어요."
            }));

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 18]]);
  }));

  return function isMine(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.isMine = isMine;

function pow(req, res) {
  return req + res;
}