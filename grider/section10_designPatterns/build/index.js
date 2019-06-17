"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Classes/Sorter");
var Collections_1 = require("./Classes/Collections");
/* NUMBERCOLLECTION CLASS */
var numbers = new Collections_1.NumberCollection([10, 2, 4, -55, -3, 29]);
console.log("Will the getData() parent class method work: \n[" + numbers.getData() + "]", numbers instanceof Collections_1.NumberCollection);
/* BUBBLESORTER CLASS */
var sorter = new Sorter_1.BubbleSorter(numbers);
var sortedNumbers = sorter.getSortedAscending();
console.log("\nlets see what we can do with the variable 'numbers...\n" + sorter.collection.getData() + ".\nThe sorted numbers are also here: " + sortedNumbers + "\n");
