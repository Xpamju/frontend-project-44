#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello ,' + userName + '!');

console.log('Answer "yes" if the number is even, otherwise answer "no".')

function num (){
    return (Math.round(Math.random() * 100));
}

const quest = readlineSync.question('Question: ' + num() + '\nYour answer: ');

