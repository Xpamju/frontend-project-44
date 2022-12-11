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

  function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

function gameGcd() {
    console.log('Welcome to the Brain Games!');
    const user = getName();
    console.log(`Hello ,${user}!`);
    console.log('Find the greatest common divisor of given numbers.')
    for (let i = 0; i < 3; i += 1) {
        const num1 = num();
        const num2 = num();
        let str = '';
        const quest = readlineSync.question(`${'Question'}: ${num1} ${num2} ${'\nYour answer: '}`)
        const rightansw = NOD(num1, num2);
        let answstr = `${str}${rightansw}`;
        if (quest === answstr) {
            console.log('Correct!')
        } else {
            console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${answstr}${"\nLet's try again"}, ${user}`)
            return;
        }
    }
    console.log(`Congratulations, ${user}!`);
}
gameGcd()