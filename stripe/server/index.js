"use strict";
exports.__esModule = true;
var express = require("express");
// import { Request, Response, Express } from "express";
exports.app = express();
var stripe = require("stripe")("sk_test_wsxCfHvpkHLwIWMHuLkkSVTL00ikoeYopP");
exports.app.use(require("body-parser").text());
exports.app.get("/", function (req, res) {
    return res.send("Hello There!!!");
});
exports.app.post('/charge', function (req, res) {
    console.log("post requested on /charge");
});
exports.app.listen(4000, function () {
    console.log("server running on 4000..");
});
