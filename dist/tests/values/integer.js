"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
exports.default = function (test) {
    itsInvalid_1.default(1.1, 'not a Integer', test);
    itsInvalid_1.default('', 'not a Number', test);
    itsValid_1.default(10, test);
    itsValid_1.default(0, test);
};
