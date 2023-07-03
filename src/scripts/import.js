"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("node:fs");
var sync_1 = require("csv/sync");
var data = fs.readFileSync('data.csv');
var parsed = (0, sync_1.parse)(data, {
    delimiter: ',',
    columns: true,
    relax_quotes: true
});
var headers = Object.keys(parsed[0]);
var index = function () {
    var transformed = parsed.map(function (row) { return ({
        question: row['Question'],
        answers: [
            {
                answer: row['Answer1'],
                correct: row['CorrectAnswerId'] === '1'
            },
            {
                answer: row['Answer2'],
                correct: row['CorrectAnswerId'] === '2'
            },
            {
                answer: row['Answer3'],
                correct: row['CorrectAnswerId'] === '3'
            },
            {
                answer: row['Answer4'],
                correct: row['CorrectAnswerId'] === '4'
            },
        ],
        category: row['Category'],
        difficulty: row['Difficulty'],
    }); });
    fs.writeFileSync('questions-new.ts', "export const questions =  ".concat(JSON.stringify(transformed, null, 2), ";"));
};
void index();
