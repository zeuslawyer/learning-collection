"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BubbleSorter = /** @class */ (function () {
    function BubbleSorter(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    BubbleSorter.prototype.getSortedAscending = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
        return this.collection.getData();
    };
    return BubbleSorter;
}());
exports.BubbleSorter = BubbleSorter;