"use strict";
exports.__esModule = true;
var Inspiration = /** @class */ (function () {
    function Inspiration(quote) {
        if (!quote) {
            this.quote = {
                author: 'confucious',
                text: 'If you fail to attain your goals, change your approach, not your goals.'
            };
        }
        else {
            this.quote = quote;
        }
    }
    Inspiration.prototype.getQuote = function () {
        return this.quote;
    };
    Inspiration.prototype.setQuote = function (author, text) {
        this.quote = { author: author, text: text };
    };
    Inspiration.prototype.generateQuote = function () {
        return this.quote;
    };
    return Inspiration;
}());
exports.Inspiration = Inspiration;
exports.q = new Inspiration().generateQuote();
