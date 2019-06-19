"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BubbleSorter = /** @class */ (function () {
    function BubbleSorter() {
    }
    // this method usesd the Sortable object's own methods to sort
    // the Sortable object, thus mutating the Sortable object directly
    BubbleSorter.prototype.getSortedAscending = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
            // console.log(`post sorting colleciton: [${this.collection.data}]`);
        }
    };
    return BubbleSorter;
}());
exports.BubbleSorter = BubbleSorter;
