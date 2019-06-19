"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections_1 = require("./Classes/Collections");
/* NUMBERCOLLECTION CLASS */
var numbers = new Collections_1.NumberCollection([10, 2, 4, -55, -3, 29]);
numbers.getSortedAscending();
console.log(numbers.data, numbers.length);
var str = new Collections_1.StringCollection('ZubInPraTAp');
str.getSortedAscending();
console.log(str.data, str.length);
/* BUBBLESORTER CLASS - Operates on the NumberCollection object directly */
// let sorter = new BubbleSorter(numbers)
// sorter.getSortedAscending();
// console.log(`
// sorted array: [${numbers.data}]
// ==Or==
// To see the array we need to cast it back to NumberCollection to access its 'data' prop
// or else we will only be able to console out an object
// ${(sorter.collection as NumberCollection).data}.
// `)
/* STRING COLLECTION CLASS */
// let stringColl = new StringCollection('efgcBAD');
// let stringSorter = new BubbleSorter(stringColl);
// stringSorter.getSortedAscending()
// console.log(` And here is the string, sorted alphabetically ...
//     ${stringColl.data}, which still has ${stringColl.length} characters.
// `);
