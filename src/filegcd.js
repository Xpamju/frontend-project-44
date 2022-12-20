import readlineSync from 'readline-sync';
import brainGame from './cli.js';

function num() {
  const number = (Math.round(Math.random() * 50));
  return number;
}

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export default function gameGcd() {
  const userName = brainGame();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = num();
    const num2 = num();
    const str = '';
    const quest = readlineSync.question(`${'Question'}: ${num1} ${num2} ${'\nYour answer: '}`);
    const rightansw = NOD(num1, num2);
    const answstr = `${str}${rightansw}`;
    if (quest === answstr) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${answstr}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
