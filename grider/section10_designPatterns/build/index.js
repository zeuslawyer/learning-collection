"use strict";
var BubbleSorter = /** @class */ (function () {
    function BubbleSorter(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    BubbleSorter.prototype.getSortedAscending = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    //swap
                    var leftHandNum = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHandNum;
                }
            }
        }
        return this.collection;
    };
    return BubbleSorter;
}());
var sorter = new BubbleSorter([10, 3, -10, -7, 14, 4]);
console.log(sorter.collection);
console.log(sorter.getSortedAscending());
