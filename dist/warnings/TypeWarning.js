"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var TypeWarning = (function (_super) {
    __extends(TypeWarning, _super);
    function TypeWarning(data, path, typeName) {
        var _this = _super.call(this, data, path) || this;
        _this.typeName = typeName;
        return _this;
    }
    return TypeWarning;
}(rulr_1.Warning));
exports.default = TypeWarning;
exports.createTypeWarning = function (typeName) {
    return function (data, path) {
        return new TypeWarning(data, path, typeName);
    };
};
