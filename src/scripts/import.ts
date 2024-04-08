import * as fs from 'node:fs';
import { parse, stringify } from 'csv/sync';
import { Question } from '../data/questions';

const data = fs.readFileSync('konyvelo_kviz.csv');

const parsed = parse(data, {
  delimiter: ',',
  columns: true,
  relax_quotes: true
});

const headers = Object.keys(parsed[0]);

const index = () => {
  let i = 0;
  const transformed: Question[] = parsed.map((row: any) => {
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
      category: row['Category'],
    }
  });

  fs.writeFileSync('questions-new.ts', `export const questions =  ${JSON.stringify(transformed, null, 2)};`);
};

void index();
