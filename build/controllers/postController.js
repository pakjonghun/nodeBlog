"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postDetail = exports.detail = exports.postAddPost = exports.getAddPost = void 0;

var _postModel = _interopRequireDefault(require("../models/postModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAddPost = function getAddPost(req, res) {
  res.render("add", {
    title: "글쓰기"
  });
};

exports.getAddPost = getAddPost;

var postAddPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var user, _req$body, title, description, post;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            user = res.locals.user;
            _req$body = req.body, title = _req$body.title, description = _req$body.description;
            _context.prev = 3;
            _context.next = 6;
            return _postModel["default"].create({
              title: title,
              description: description,
              user: user.id
            });

          case 6:
            post = _context.sent;
            user.posts.push(post._id);
            _context.next = 10;
            return user.save();

          case 10:
            res.send({
              ok: true
            });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            res.send({
              ok: false,
              error: "서버에서 에러가 발생했어요."
            });

          case 17:
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t1 = _context["catch"](0);
            console.log(_context.t1);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19], [3, 13]]);
  }));

  return function postAddPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postAddPost = postAddPost;

var detail = function detail(req, res) {
  res.render("detail", {
    title: "포스트내용"
  });
};

exports.detail = detail;

var postDetail = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user, post;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            user = res.locals.user;
            _context2.prev = 2;
            _context2.next = 5;
            return _postModel["default"].findOne({
              _id: id
            }).populate("comments");

          case 5:
            post = _context2.sent;

            if (post) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.send({
              ok: 0,
              erorr: "포스트가 존재하지 않습니다.",
              user: user
            }));

          case 8:
            res.send({
              ok: true,
              data: {
                post: post,
                user: user
              },
              user: user
            });
            _context2.next = 15;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);
            res.send({
              ok: 1,
              error: "서버에서 에러가 발생했습니다.",
              user: user
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 11]]);
  }));

  return function postDetail(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postDetail = postDetail;