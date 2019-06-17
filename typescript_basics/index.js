// "use strict";
exports.__esModule = true;
var Inspiration_1 = require("./Inspiration");
var quote = new Inspiration_1.Inspiration();
var test1 = quote.getQuote();
quote.setQuote(
  "Zubin Pratap",
  "Your decisions today decide the life you lead tomorrow"
);
var test2 = quote.getQuote();
var created = new Inspiration_1.Inspiration({
  author: "Lao Tsu",
  text: "A journey of a thousand miles begins with a single step."
});
console.log(
  '\ntest 1 is the quote created on initialisation without an argument: "' +
    test1.text +
    '";\ntest 2 is ' +
    test2.text +
    ';\ntest 3 should print out an exported singleton called "q": ' +
    JSON.stringify(Inspiration_1.q, null, 2) +
    '\ntest 4: the var "created" should have a quote from Lao Tsu:  ' +
    JSON.stringify(created.getQuote(), null, 2) +
    "\n"
);
