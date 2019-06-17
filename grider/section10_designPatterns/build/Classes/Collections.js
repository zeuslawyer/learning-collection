"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Collection = /** @class */ (function () {
    function Collection(collection) {
        this.length = collection.length;
        this.data = collection;
    }
    Collection.prototype.getData = function () {
        return this.data;
    };
    return Collection;
}());
var NumberCollection = /** @class */ (function (_super) {
    __extends(NumberCollection, _super);
    function NumberCollection(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        _this.data = data;
        return _this;
    }
    return NumberCollection;
}(Collection));
exports.NumberCollection = NumberCollection;
var JSObjectCollection = /** @class */ (function (_super) {
    __extends(JSObjectCollection, _super);
    function JSObjectCollection(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        _this.data = data;
        return _this;
    }
    return JSObjectCollection;
}(Collection));
exports.JSObjectCollection = JSObjectCollection;
