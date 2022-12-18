import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
export default function brainGame() {
  console.log('Welcome to the Brain Games!');
  userName;
  console.log(`Hello, ${userName}!`);
}
export {userName}