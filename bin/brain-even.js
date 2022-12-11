#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getName() {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}

function num() {
  const number = (Math.round(Math.random() * 100));
  return number;
}

function game() {
  console.log('Welcome to the Brain Games!');
  const user = getName();
  console.log(`Hello ,${user}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numsave = num();
    const quest = readlineSync.question('Question: ' + numsave + '\nYour answer: ');
    if ((numsave % 2 === 0 && quest === 'yes') || (numsave % 2 !== 0 && quest === 'no')) {
      console.log('Coorect!');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${user}.`);
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
}
game();
