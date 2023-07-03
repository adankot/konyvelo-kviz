import * as fs from 'node:fs';
import { parse, stringify } from 'csv/sync';
import { Question } from '../data/questions';

const data = fs.readFileSync('data.csv');

const parsed = parse(data, {
  delimiter: ',',
  columns: true,
  relax_quotes: true
});

const headers = Object.keys(parsed[0]);

const index = () => {
  const transformed: Question[] = parsed.map((row: any) => ({
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
  }));

  fs.writeFileSync('questions-new.ts', `export const questions =  ${JSON.stringify(transformed, null, 2)};`);
};

void index();
