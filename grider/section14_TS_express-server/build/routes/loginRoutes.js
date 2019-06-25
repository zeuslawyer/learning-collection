"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
loginRouter.get('/', function (req, res) {
    res.send("\n    <div>\n        <form method=\"POST\">\n          <input name=\"email\" id=\"email\" placeholder=\"your email\" type=\"email\" />\n          <input name=\"password\" id=\"password\" type=\"password\" />\n          <div>\n            <button id=\"btn-login\">LOGIN</button>\n          </div>\n        </form>\n    </div>");
});
loginRouter.get('/:id', function (req, res) {
    res.send("You've reached the login page....and passed the following\n  arguments in your path param:  " + req.params.id);
});
loginRouter.post('/', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'z@z.com' && password === '123') {
        // ⭐️ set session cookie
        req.session = { isLoggedIn: true };
        // ⭐️ redirect home
        res.redirect('/');
        return;
    }
    res.send("You must enter a valid email and password. <a href=\"/login\">try again</a>");
});
