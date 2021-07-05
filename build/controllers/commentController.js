"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delComment = exports.editComment = exports.addComment = void 0;

var _commentModel = _interopRequireDefault(require("../models/commentModel"));

var _postModel = _interopRequireDefault(require("../models/postModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var addComment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, description, postId, user, post, comment;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, description = _req$body.description, postId = _req$body.postId;

            if (description.trim().length) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.send({
              ok: false,
              error: "댓글 내용이 없습니다."
            }));

          case 4:
            user = res.locals.user;
            _context.next = 7;
            return _postModel["default"].findById(postId);

          case 7:
            post = _context.sent;

            if (post) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.send({
              ok: false,
              error: "해당 포스트가 없습니다."
            }));

          case 10:
            _context.next = 12;
            return _commentModel["default"].create({
              post: postId,
              description: description,
              user: user.id
            });

          case 12:
            comment = _context.sent;
            post.comments.push(comment._id);
            user.posts.push(post._id);
            _context.next = 17;
            return user.save();

          case 17:
            _context.next = 19;
            return post.save();

          case 19:
            res.send({
              ok: true,
              data: comment._id
            });
            _context.next = 26;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.send({
              ok: 1,
              error: "서버에서 오류가 발생했어요."
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 22]]);
  }));

  return function addComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addComment = addComment;

var editComment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, desc, commentID;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, desc = _req$body2.desc, commentID = _req$body2.commentID;
            _context2.next = 4;
            return _commentModel["default"].updateOne({
              _id: commentID
            }, {
              $set: {
                description: desc
              }
            });

          case 4:
            return _context2.abrupt("return", res.send({
              ok: true
            }));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.send({
              ok: 1,
              error: "서버에서 오류가 발생했어요."
            }));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function editComment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.editComment = editComment;

var delComment = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.body.id;
            _context3.next = 4;
            return _commentModel["default"].remove({
              _id: id
            });

          case 4:
            res.send({
              ok: true
            });
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.send({
              ok: 1,
              error: "서버에서 에러가 발생했어요."
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function delComment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.delComment = delComment;