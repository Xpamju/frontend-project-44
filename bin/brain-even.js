#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello ,' + userName + '!');

console.log('Answer "yes" if the number is even, otherwise answer "no".')
//console.log(Math.round(Math.random() * 100));
function num (){
    return console.log(Math.round(Math.random() * 100));

}
let numbers = num()
const answer = readlineSync.question('Question:' + numbers);
