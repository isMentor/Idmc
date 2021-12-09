"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/*
 * @Author: tiw
 * @LastEditors: Please set LastEditors
 * @Description: Main
 */
var core_1 = require("./core");
var default_1 = require("./global/default");
var util_1 = require("./helpers/util");
var Idmc = /** @class */ (function (_super) {
    __extends(Idmc, _super);
    function Idmc(dataSource, param) {
        if (dataSource === void 0) { dataSource = []; }
        if (param === void 0) { param = {}; }
        var _this = this;
        // 初始化识别码
        (0, util_1.headingCode)(dataSource || [], __assign(__assign({}, param), { defaultKeyTarget: param.keyTarget || default_1.KEY_NAME }));
        _this = _super.call(this, dataSource, param) || this;
        return _this;
    }
    return Idmc;
}(core_1.default));
exports.default = Idmc;
//# sourceMappingURL=index.js.map