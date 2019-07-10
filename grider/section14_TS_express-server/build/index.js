"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var body_parser_1 = __importDefault(require("body-parser"));
var loginRoutes_1 = require("./routes/loginRoutes");
var logoutRoutes_1 = require("./routes/logoutRoutes");
var protectedRoutes_1 = require("./routes/protectedRoutes");
var PORT = 3000;
var app = express_1.default();
/*  👉 MOUNT MIDDLEWARE & ROUTES */
app.use(cookie_session_1.default({ keys: ['wduyfg73r6yb23wrhg9gr8hfu43jwedvs'] })); // ADDS sessions property to req
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/login', loginRoutes_1.loginRouter);
app.use('/logout', logoutRoutes_1.logoutRouter);
app.use('/protected', protectedRoutes_1.requireAuth, protectedRoutes_1.protectedRouter);
/* 👉 root route */
app.get('/', function (req, res) {
    console.log(req.session);
    if (req.session && req.session.isLoggedIn) {
        res.send("\n    <h3> Welcome. You're logged in. </h3>\n    <div> Time: " + new Date().toLocaleTimeString() + " </div>\n    <div><a href=\"/logout\">LOGOUT</a></div>\n      ");
    }
    else {
        res.send("\n    <h3> Welcome. You're not logged in. </h3>\n    <div> Time: " + new Date().toLocaleTimeString() + " </div>\n    <div><a href=\"/login\">LOGIN</a></div>\n      ");
    }
});
app.listen(PORT, function () {
    console.log("\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25...server running on " + PORT + "...\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25\uD83D\uDD25");
});
