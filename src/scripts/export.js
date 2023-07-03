"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var sync_1 = require("csv/sync");
var questions_1 = require("../data/questions");
var index = function () {
    //TODO expand answers array to columns
    var transformed = questions_1.default.map(function (_a) {
        var answers = _a.answers, question = __rest(_a, ["answers"]);
        var answer1 = answers[0].answer + (answers[0].correct ? ' (correct)' : '');
        var answer2 = answers[1].answer + (answers[1].correct ? ' (correct)' : '');
        var answer3 = answers[2].answer + (answers[2].correct ? ' (correct)' : '');
        var answer4 = answers[3].answer + (answers[3].correct ? ' (correct)' : '');
        return __assign(__assign({}, question), { answer1: answer1, answer2: answer2, answer3: answer3, answer4: answer4 });
    });
    fs.writeFileSync('questions.csv', (0, sync_1.stringify)(transformed.sort(function (a, b) { return a.question.localeCompare(b.question); }), { header: true }));
};
void index();
