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
    return Collection;
}());
exports.Collection = Collection;
var NumberCollection = /** @class */ (function (_super) {
    __extends(NumberCollection, _super);
    function NumberCollection(data) {
        return _super.call(this, data) || this;
    }
    NumberCollection.prototype.compare = function (leftInd, rightInd) {
        return this.data[leftInd] > this.data[rightInd];
    };
    NumberCollection.prototype.swap = function (leftInd, rightInd) {
        var leftHandVal = this.data[leftInd];
        this.data[leftInd] = this.data[rightInd];
        this.data[rightInd] = leftHandVal;
    };
    NumberCollection.prototype.getData = function () {
        return this.data;
    };
    return NumberCollection;
}(Collection));
exports.NumberCollection = NumberCollection;
var StringCollection = /** @class */ (function (_super) {
    __extends(StringCollection, _super);
    function StringCollection(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        return _this;
    }
    StringCollection.prototype.compare = function (leftInd, rightInd) {
        // make everything lower case to sort alphabetically, as upper case as different ASCII value that wont work for sorting alphabetically
        return this.data[leftInd].toLowerCase() > this.data[rightInd].toLowerCase();
    };
    StringCollection.prototype.swap = function (leftInd, rightInd) {
        // string characters are readable only with sq bracket notation
        var characters = this.data.split('');
        var leftHandVal = characters[leftInd];
        characters[leftInd] = characters[rightInd];
        characters[rightInd] = leftHandVal;
        this.data = characters.join('');
    };
    return StringCollection;
}(Collection));
exports.StringCollection = StringCollection;
var JSObjectCollection = /** @class */ (function (_super) {
    __extends(JSObjectCollection, _super);
    function JSObjectCollection(data) {
        var _this = _super.call(this, data) || this;
        _this.data = data;
        return _this;
    }
    JSObjectCollection.prototype.compare = function () {
    };
    JSObjectCollection.prototype.swap = function () {
    };
    return JSObjectCollection;
}(Collection));
exports.JSObjectCollection = JSObjectCollection;
