"use strict";
/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Query / check
 */
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
exports.default = (function (dataSources, target) {
    var disTarget = screenTarget(target);
    var resolve = resolveData(dataSources, disTarget);
    var sources = resolve.filter(function (item) { return !!item; });
    return sources;
});
/**
 * @description: 筛选 Target
 * @param {Object} target
 */
var screenTarget = function (target) {
    var targets = __assign({}, target);
    for (var key in target) {
        var hasOwnProperty = Object.prototype.hasOwnProperty.call(target, key);
        if (hasOwnProperty) {
            var value = target[key];
            var targetAssert = ['', null, undefined].includes(value);
            targetAssert && delete targets[key];
        }
        else {
            return targets;
        }
    }
    return targets;
};
/**
 * @description: Data Resolve
 * @param {Array} dataSources
 */
var resolveData = function (dataSources, target) {
    return dataSources.map(function (item) {
        var map = new Map();
        var asserts = assert(item, target);
        map.set(!asserts.includes(false), item);
        return map.get(true);
    });
};
/**
 * @description: 断言
 * @param {Array} item
 * @param {any} target
 * @return {*} 所有结果集合
 */
var assert = function (item, target) {
    var targetKeys = Object.keys(target);
    var fact = [];
    targetKeys.map(function (name) {
        var is = "".concat(item[name]) === "".concat(target[name]);
        fact.push(is);
    });
    return fact;
};
//# sourceMappingURL=query.js.map