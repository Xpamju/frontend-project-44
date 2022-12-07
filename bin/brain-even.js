#!/usr/bin/env node
import readlineSync from 'readline-sync';
// console.log('Welcome to the Brain Games!');
// const userName = readlineSync.question('May I have your name? ');
// console.log('Hello ,' + userName + '!');

// console.log('Answer "yes" if the number is even, otherwise answer "no".')




function play() {
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Hello ,' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".')


let answ = '\nYour answer: ';
let useranswer = ''
let yes = 'yes'
let no = 'no'

function num() {
    let number = (Math.round(Math.random() * 100));
      return number;
    }
  
    
const quest = readlineSync.question('Question: ' + num() + answ + useranswer);

const quest2 = (`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}.`);

function ifa() {
const quest2 = (`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}.`);
let truly = 'Correct!';
    if (num() % 2 === 0 && quest === yes) {
        console.log(truly)
    } if (num() % 2 === 0 && quest === no) {
        return quest2;
    } if (num() % 2 !== 0 && quest === yes) {
        return quest2;
    } if (num() % 2 !== 0 && quest === no) {
        return truly;
    } else {
        return falsy;
    }
    }
return ifa;
}

play()

