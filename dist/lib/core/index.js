"use strict";
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
/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: 核心入口文件
 */
var util_1 = require("../helpers/util");
var default_1 = require("../global/default");
var bll_1 = require("./bll");
var Core = /** @class */ (function () {
    function Core(source, param) {
        var data = source || [];
        this.dataSources = data;
        this.parameters = param;
        this.keyTarget = param.keyTarget || default_1.KEY_NAME;
        this.product = data;
    }
    /**
     * @description: Add multiple
     * @param {Array} data 添加的数据
     * @return {*}
     */
    Core.prototype.save = function (data) {
        var product = __spreadArray(__spreadArray([], this.dataSources, true), (0, bll_1.save)(data, this.parameters), true);
        this.assignment(product);
    };
    /**
     * @description: Add one data
     * @param {Object} data 添加的数据
     */
    Core.prototype.saveOne = function (data) {
        var product = __spreadArray(__spreadArray([], this.dataSources, true), (0, bll_1.save)([data], this.parameters), true);
        this.assignment(product);
    };
    /**
     * @description: 删除数据
     * @param {any} key
     */
    Core.prototype.remove = function (key) {
        var data = (0, bll_1.remove)(key, this.dataSources);
        this.assignment(data);
    };
    /**
     * @description:
     * @param {any} target
     * @param {any} data
     * @return {*}
     */
    Core.prototype.update = function (target, data) {
        var dataSources = (0, bll_1.update)(this.dataSources, (0, util_1.headingCodeOne)(target), (0, util_1.headingCodeOne)(data));
        this.assignment(dataSources);
    };
    /**
     * @description: 查询多个
     * @param {any} data 查询的对象
     */
    Core.prototype.find = function (data) {
        var sources = (0, bll_1.query)(this.dataSources, data);
        this.assignment(sources, { sources: false });
    };
    /**
     * @description: 查询单个
     * @param {Object} data 查询的对象
     * @param {Number} index
     */
    Core.prototype.findOne = function (data, index) {
        if (index === void 0) { index = 0; }
        var sources = (0, bll_1.query)(this.dataSources, data);
        this.assignment(sources["".concat(index)], { sources: false });
    };
    /**
     * @description: 私有方法
     * @param {Array} data
     */
    Core.prototype.assignment = function (data, config) {
        var sources = (config || {}).sources;
        if (sources)
            this.dataSources = data;
        this.product = data && this.clearKey(data);
    };
    /**
     * @description: 清除 __key__
     * @param {Array} data
     * @return {*}
     */
    Core.prototype.clearKey = function (data) {
        var ass = (0, util_1.assert)(data);
        var conversionData = ass.array ? data : [data];
        return conversionData.map(function (item) {
            item[default_1.KEY_NAME] && delete item[default_1.KEY_NAME];
            return item;
        });
    };
    return Core;
}());
exports.default = Core;
//# sourceMappingURL=index.js.map