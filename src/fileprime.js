import readlineSync from 'readline-sync';
import { userName } from './cli.js';
import brainGame from './cli.js';

function num() {
  const number = (Math.round(Math.random() * 50));
  return number;
}

function ifprime(n) {
  if ( n === 1) {
    return 'no';
  } else if (n === 2) {
    return 'yes';
  } else {
    for (let x = 2; x < n; x += 1) {
      if (n % x === 0) {
        return 'no';
      }
    }
    return 'yes';
  }
}

export default function primeGame() {
  brainGame();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = num();
    const quest = readlineSync.question(`${'Question: '}${number} ${'\nYour answer: '}`);
    const rigthansw = ifprime(number);
    if (quest === rigthansw) {
      console.log('Correct!');
    } else {
      console.log(`${quest} ${'is wrong answer ;(. Correct answer was'} ${rigthansw}.${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`${'Congratulations'}, ${userName}!`);
}
