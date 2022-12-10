#!/usr/bin/env node
import readlineSync from 'readline-sync';


function get_name() {
    const userName = readlineSync.question('May I have your name? ');
    return userName
}

function num() {
    let number = (Math.round(Math.random() * 100));
      return number;
    }

function full() {
    console.log('Welcome to the Brain Games!');
    let user = get_name()
    console.log('Hello ,' + user + '!');
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i++) {
        let numsave = num()
        const quest = readlineSync.question('Question: ' + numsave + '\nYour answer: ');
        if ((numsave % 2 === 0 && quest === 'yes') || (numsave % 2 !== 0 && quest === 'no')){
            console.log ('Coorect!')
        }
        else {
            let quest2 = (`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${user}.`);
            console.log(quest2)
            return 
        }
    }
    console.log(`Congratulation, ${user}!`)
    }
full()
