"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.headingCodeOne = exports.headingCode = exports.TAG = void 0;
/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description:
 */
var default_1 = require("../global/default");
var random = Math.random();
var toStringType = Object.prototype.toString;
/**
 * @description: TAG 生成文档的唯一标识符
 * @param {Number} index
 * @return { key } 唯一标识符
 */
var TAG = function (index) {
    return "".concat(index || 0).concat(random).concat(new Date().getTime());
};
exports.TAG = TAG;
/**
 * @description: 初始化识别码
 * @param {Array} dataSource 数据源
 * @return {Array} dataSource
 */
var headingCode = function (dataSource, param) {
    if (param === void 0) { param = {}; }
    return dataSource.map(function (item, i) {
        !item[default_1.KEY_NAME] &&
            (item[default_1.KEY_NAME] = item["".concat(param.keyTarget)] || item.id || item.key || (0, exports.TAG)(i));
        return item;
    });
};
exports.headingCode = headingCode;
/**
 * @description: 初始化识别码
 * @param {Intruder} source 数据源
 * @return {Array} dataSource
 */
var headingCodeOne = function (source) {
    var updateData = __assign({}, source);
    !updateData[default_1.KEY_NAME] && (updateData[default_1.KEY_NAME] = source.id || source.key);
    return updateData;
};
exports.headingCodeOne = headingCodeOne;
/**
 * @description: 断言数据类型
 * @param {*} T
 * @return {*}
 */
var assert = function (data) {
    var type = toStringType.call(data);
    return {
        array: type === '[object Array]',
        none: !data
    };
};
exports.assert = assert;
//# sourceMappingURL=util.js.map