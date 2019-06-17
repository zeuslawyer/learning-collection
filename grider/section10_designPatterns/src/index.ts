import {BubbleSorter} from './Classes/Sorter'
import {NumberCollection} from './Classes/Collections'

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

let numbers = new NumberCollection([76,3,-10, -7, 14, 4])
console.log(`Will this work: 
[${numbers.getData()}]`, numbers instanceof NumberCollection);