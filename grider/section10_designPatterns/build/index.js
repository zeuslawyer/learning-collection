"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collections_1 = require("./Classes/Collections");
// const sorter = new BubbleSorter([])
// console.log(`
// The original: 
//   [${sorter.collection}] ...
// and the sorted:  
//   [${sorter.getSortedAscending()}]
// `)
// console.log(`
// is sorter an instance of BubbleSorter?
// ${sorter instanceof BubbleSorter}
// `);
var numbers = new Collections_1.NumberCollection([76, 3, -10, -7, 14, 4]);
console.log("Will this work: \n[" + numbers.getData() + "]", numbers instanceof Collections_1.NumberCollection);
