"use strict";
exports.__esModule = true;
var fs = require("node:fs");
var sync_1 = require("csv/sync");
var data = fs.readFileSync('konyvelo_kviz.csv');
var parsed = (0, sync_1.parse)(data, {
    delimiter: ',',
    columns: true,
    relax_quotes: true
});
var headers = Object.keys(parsed[0]);
var index = function () {
    var i = 0;
    var transformed = parsed.map(function (row) {
        i++;
        return {
            id: i,
            question: row['question'],
            answers: [
                {
                    id: 1,
                    answer: row['correct_answer'],
                    correct: true
                },
                {
                    id: 2,
                    answer: row['bad_answer_1'],
                    correct: false
                },
                {
                    id: 3,
                    answer: row['bad_answer_2'],
                    correct: false
                },
                {
                    id: 4,
                    answer: row['bad_answer_3'],
                    correct: false
                },
            ],
            category: row['Category']
        };
    });
    fs.writeFileSync('questions-new.ts', "export const questions =  ".concat(JSON.stringify(transformed, null, 2), ";"));
};
void index();
