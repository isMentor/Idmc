"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Base
 */
var default_1 = require("../../global/default");
var util_1 = require("../../helpers/util");
exports.default = (function (data, parameters) {
    // Default Key
    var keyTarget = parameters.keyTarget || default_1.KEY_NAME;
    // 给新对象赋一个 key
    var dataTag = data.map(function (item, i) {
        item["".concat(keyTarget)] = (0, util_1.TAG)(i);
        return item;
    });
    return dataTag;
});
//# sourceMappingURL=save.js.map