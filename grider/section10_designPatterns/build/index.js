"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Classes/Sorter");
var Collections_1 = require("./Classes/Collections");
/* NUMBERCOLLECTION CLASS */
var numbers = new Collections_1.NumberCollection([10, 2, 4, -55, -3, 29]);
console.log("Will the getData() parent class method work: \n[" + numbers.getData() + "]", numbers instanceof Collections_1.NumberCollection);
/* BUBBLESORTER CLASS - Operates on the NumberCollection object directly */
var sorter = new Sorter_1.BubbleSorter(numbers);
sorter.getSortedAscending();
console.log("\nsorted array: [" + numbers.data + "]\n==Or==\nTo see the array we need to cast it back to NumberCollection to access its 'data' prop\nor else we will only be able to console out an object\n" + sorter.collection.data + ".\n");
/* STRING COLLECTION CLASS */
var stringColl = new Collections_1.StringCollection('efgcBAD');
var stringSorter = new Sorter_1.BubbleSorter(stringColl);
stringSorter.getSortedAscending();
console.log(" And here is the string, sorted alphabetically ...\n    " + stringColl.data + ", which still has " + stringColl.length + " characters.\n");
