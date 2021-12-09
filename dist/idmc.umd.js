(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.idmc = factory());
})(this, (function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    /*
     * @Author: tiw
     * @LastEditors: Please set LastEditors
     * @Description: 默认数据
     */
    var KEY_NAME = '__key__';

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
    /**
     * @description: 初始化识别码
     * @param {Array} dataSource 数据源
     * @return {Array} dataSource
     */
    var headingCode = function (dataSource, param) {
        if (param === void 0) { param = {}; }
        return dataSource.map(function (item, i) {
            !item[KEY_NAME] &&
                (item[KEY_NAME] = item["".concat(param.keyTarget)] || item.id || item.key || TAG(i));
            return item;
        });
    };
    /**
     * @description: 初始化识别码
     * @param {Intruder} source 数据源
     * @return {Array} dataSource
     */
    var headingCodeOne = function (source) {
        var updateData = __assign({}, source);
        !updateData[KEY_NAME] && (updateData[KEY_NAME] = source.id || source.key);
        return updateData;
    };
    /**
     * @description: 断言数据类型
     * @param {*} T
     * @return {*}
     */
    var assert$1 = function (data) {
        var type = toStringType.call(data);
        return {
            array: type === '[object Array]',
            none: !data
        };
    };

    /*
     * @Author: tiw
     * @LastEditors: Please set LastEditors
     * @Description: Base
     */
    var save = (function (data, parameters) {
        // Default Key
        var keyTarget = parameters.keyTarget || KEY_NAME;
        // 给新对象赋一个 key
        var dataTag = data.map(function (item, i) {
            item["".concat(keyTarget)] = TAG(i);
            return item;
        });
        return dataTag;
    });

    /*
     * @Author: tiw
     * @LastEditors: Please set LastEditors
     * @Description: Delete
     */
    var remove = (function (key, dataSources) {
        var ass = assert$1(key);
        var tag = ass && ass.array ? __spreadArray([], key, true) : [key];
        var data = dataSources.filter(function (item) { return !tag.includes(item["".concat(KEY_NAME)]); });
        return data;
    });

    var update = (function (sourcesData, target, data) {
        var dataSources = __spreadArray([], sourcesData, true);
        var sources = dataSources.find(function (item) { return item.__key__ === target.__key__; });
        for (var key in sources) {
            var hasOwnProperty = Object.prototype.hasOwnProperty.call(sources, key);
            hasOwnProperty && key && (sources[key] = data[key]);
        }
        return dataSources;
    });

    /*
     * @Author: tiw
     * @LastEditors: Please set LastEditors
     * @Description: Query / check
     */
    var query = (function (dataSources, target) {
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

    var Core = /** @class */ (function () {
        function Core(source, param) {
            var data = source || [];
            this.dataSources = data;
            this.parameters = param;
            this.keyTarget = param.keyTarget || KEY_NAME;
            this.product = data;
        }
        /**
         * @description: Add multiple
         * @param {Array} data 添加的数据
         * @return {*}
         */
        Core.prototype.save = function (data) {
            var product = __spreadArray(__spreadArray([], this.dataSources, true), save(data, this.parameters), true);
            this.assignment(product);
        };
        /**
         * @description: Add one data
         * @param {Object} data 添加的数据
         */
        Core.prototype.saveOne = function (data) {
            var product = __spreadArray(__spreadArray([], this.dataSources, true), save([data], this.parameters), true);
            this.assignment(product);
        };
        /**
         * @description: 删除数据
         * @param {any} key
         */
        Core.prototype.remove = function (key) {
            var data = remove(key, this.dataSources);
            this.assignment(data);
        };
        /**
         * @description:
         * @param {any} target
         * @param {any} data
         * @return {*}
         */
        Core.prototype.update = function (target, data) {
            var dataSources = update(this.dataSources, headingCodeOne(target), headingCodeOne(data));
            this.assignment(dataSources);
        };
        /**
         * @description: 查询多个
         * @param {any} data 查询的对象
         */
        Core.prototype.find = function (data) {
            var sources = query(this.dataSources, data);
            this.assignment(sources, { sources: false });
        };
        /**
         * @description: 查询单个
         * @param {Object} data 查询的对象
         * @param {Number} index
         */
        Core.prototype.findOne = function (data, index) {
            if (index === void 0) { index = 0; }
            var sources = query(this.dataSources, data);
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
            var ass = assert$1(data);
            var conversionData = ass.array ? data : [data];
            return conversionData.map(function (item) {
                item[KEY_NAME] && delete item[KEY_NAME];
                return item;
            });
        };
        return Core;
    }());

    var Idmc = /** @class */ (function (_super) {
        __extends(Idmc, _super);
        function Idmc(dataSource, param) {
            if (dataSource === void 0) { dataSource = []; }
            if (param === void 0) { param = {}; }
            var _this = this;
            // 初始化识别码
            headingCode(dataSource || [], __assign(__assign({}, param), { defaultKeyTarget: param.keyTarget || KEY_NAME }));
            _this = _super.call(this, dataSource, param) || this;
            return _this;
        }
        return Idmc;
    }(Core));

    return Idmc;

}));
//# sourceMappingURL=idmc.umd.js.map
