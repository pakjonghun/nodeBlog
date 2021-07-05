"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var userSchema = new _mongoose["default"].Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  posts: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Post"
  }]
});
userSchema.pre("save", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("\uB514\uC2A4 \uD328\uC2A4\uC6CC\uB4DC".concat(this.password));

          if (!this.isModified) {
            _context.next = 5;
            break;
          }

          _context.next = 4;
          return _bcrypt["default"].hash(this.password, 10);

        case 4:
          this.password = _context.sent;

        case 5:
          console.log("\uBC14\uAFBC\uD6C4 \uD328\uC2A4\uC6CC\uB4DC".concat(this.password));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
})));

var userModel = _mongoose["default"].model("User", userSchema);

var _default = userModel;
exports["default"] = _default;