import {Inspiration, q} from './Inspiration'

const quote = new Inspiration();

var test1 = quote.getQuote();

quote.setQuote('Zubin Pratap', 'Your decisions today decide the life you lead tomorrow')
var test2 = quote.getQuote()

var created = new Inspiration({author:'Lao Tsu', text: 'A journey of a thousand miles begins with a single step.'})

console.log(`
test 1 is the quote created on initialisation without an argument: "${test1.text}";
test 2 is ${test2.text};
test 3 should print out an exported singleton called "q": ${JSON.stringify(q, null, 2)}
test 4: the var "created" should have a quote from Lao Tsu:  ${JSON.stringify(created.getQuote(), null, 2)}
`);

