#!/usr/bin/env node
import readlineSync from 'readline-sync';

function getName() {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
}

console.log('Welcome to the Brain Games!');
const user = getName();
console.log(`Hello ,${user}!`);
