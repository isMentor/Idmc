"use strict";
/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Delete
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = require("../../global/default");
var util_1 = require("../../helpers/util");
exports.default = (function (key, dataSources) {
    var ass = (0, util_1.assert)(key);
    var tag = ass && ass.array ? __spreadArray([], key, true) : [key];
    var data = dataSources.filter(function (item) { return !tag.includes(item["".concat(default_1.KEY_NAME)]); });
    return data;
});
//# sourceMappingURL=remove.js.map