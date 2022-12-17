#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getName() {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}

function num() {
  const number = (Math.round(Math.random() * 50));
  return number;
}

function ifprime(n) {
  if (n > 1 && n % 2 !== 0) {
    return 'yes';
  } else {
    return 'no';
  }
}

function primeGame() {
  console.log('Welcome to the Brain Games!');
  const user = getName();
  console.log(`Hello, ${user}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = num();
    const quest = readlineSync.question(`${'Question: '} ${number} ${'\nYour answer: '}`);
    const rigthansw = ifprime(number);
    if (quest === rigthansw) {
      console.log('Correct!');
    } else {
      console.log(`${quest} ${'is wrong answer ;(. Correct answer was'} ${rigthansw}. ${"\nLet's try again"}, ${user}`);
      return;
    }
  }
  console.log(`${'Congratulations'}, ${user}!`);
}
primeGame();
