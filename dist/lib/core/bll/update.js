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
exports.default = (function (sourcesData, target, data) {
    var dataSources = __spreadArray([], sourcesData, true);
    var sources = dataSources.find(function (item) { return item.__key__ === target.__key__; });
    for (var key in sources) {
        var hasOwnProperty = Object.prototype.hasOwnProperty.call(sources, key);
        hasOwnProperty && key && (sources[key] = data[key]);
    }
    return dataSources;
});
//# sourceMappingURL=update.js.map