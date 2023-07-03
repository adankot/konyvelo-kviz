import * as fs from 'node:fs';
import { parse, stringify } from 'csv/sync';

import questions from '../data/questions';

const index = () => {
  //TODO expand answers array to columns
  const transformed = questions.map(({answers, ...question}) => {
    const answer1 = answers[0].answer + (answers[0].correct ? ' (correct)' : '');
    const answer2 = answers[1].answer + (answers[1].correct ? ' (correct)' : '');
    const answer3 = answers[2].answer + (answers[2].correct ? ' (correct)' : '');
    const answer4 = answers[3].answer + (answers[3].correct ? ' (correct)' : '');
    return {
      ...question,
      answer1,
      answer2,
      answer3,
      answer4
    };
  });

  fs.writeFileSync('questions.csv', stringify(transformed.sort((a, b) => a.question.localeCompare(b.question)), { header: true }));
};

void index();
