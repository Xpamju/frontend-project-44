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

function randsign() {
  const coll = ['-', '+', '*'];
  const random = Math.floor(Math.random() * coll.length);
  const ran = coll[random];
  return ran;
}
 
function calculate(num1, num2, sign) {
  switch (sign) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
  }
}

function gamecalc() {
  console.log('Welcome to the Brain Games!');
  const user = getName();
  console.log(`Hello ,${user}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = num();
    const num2 = num();
    const sign = randsign();
    const str = '';
    const quest = readlineSync.question(`${'Question: '}${num1} ${sign} ${num2} ${'\nYour answer: '}`);
    const myans = calculate(num1, num2, sign);
    const rightansw = `${str}${myans}`;
    if (quest === rightansw) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${rightansw}${"\nLet's try again"},${user}`);
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
}
gamecalc();
