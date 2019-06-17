import {BubbleSorter} from './Classes/Sorter'
import {NumberCollection} from './Classes/Collections'


/* NUMBERCOLLECTION CLASS */
let numbers = new NumberCollection([10, 2, 4, -55, -3, 29])
console.log(`Will the getData() parent class method work: 
[${numbers.getData()}]`, numbers instanceof NumberCollection);


/* BUBBLESORTER CLASS */
let sorter = new BubbleSorter(numbers)
let sortedNumbers =sorter.getSortedAscending();
console.log(`
lets see what we can do with the variable 'numbers...
${sorter.collection.getData()}.
The sorted numbers are also here: ${sortedNumbers}
`)