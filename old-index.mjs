//Code It Assignment 6.1

//If we refuse to answer a ask.yesno with a "y" or "n", it will said "Only y/n are acceptable. Valid answer >"
//If we omit ask.done,  the reach program doesn't respond anything and didn't exit the program.

import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

//let user to choose character
const isAlice = await ask.ask(
    `Are you Alice ?`,
    ask.yesno
);

const who = isAlice ? 'Alice' : 'Bob';

console.log(`Starting Fortune Game! as ${who}`);

//Create the account for user
let acc = null;
const createAcc = await ask.ask(
    'Would you like to create an account?',
    ask.yesno
);
if(createAcc) {
    acc = await stdlib.newTestAccount(stdlib.parseCurrency(100));
}
else {
    const secret = await ask.ask(
        `What is your account secret?`,
        (x) => x
    )

    acc = await stdlib.newTestAccount(secret);
}

//Deploy contract
let ctc = null;
if(isAlice) {
    ctc = acc.contract(backend);
    ctc.getInfo().then(info => {
        console.log(`The contract is deployed as ${JSON.stringify(info)}`);
    });
}
else {
    const info = await ask.ask(
        `Please paste the contract information here:`,
        (x) => JSON.parse(x)
    );

    ctc = acc.contract(backend, info);
}

//Helper Function
const fU = (amt) => stdlib.formatCurrency(amt, 3);
const getBalance = async () => fU(await stdlib.balanceOf(acc)); 

//Display before pay any wager
const before = await getBalance();
console.log(`Your balance is ${before}`);

//Declare the interact object
const interact = {...stdlib.hasRandom};

//Display timeout
interact.informTimeout = () => {
    console.log(`There was a timeout.`);
    process.exit(1);
}

//Attach the interaction to specific player
if(isAlice) {
    const amt = await ask.ask(
        `How much do you want to wager`,
        (amt) => stdlib.parseCurrency(amt)
    );
    interact.wager = amt;
    interact.deadline = {ETH: 100, ALGO: 100, CFX: 1000}[stdlib.connector];
}
else {
    interact.acceptChallenge = async (wager) => {
        const accepted = await ask.ask(
            `Do you accept the wager of ${fU(wager)}`,
            ask.yesno
        );

        if(!accepted){
            process.exit(0);
        }
    }
}

//Create getFortune Method
const FORTUNE = ['Dog', 'Cat', 'Chicken'];

interact.getFortune = async () => {
    const fortune = await ask.ask(
        `Please ${isAlice ? 'choose' : 'guess'} your fortune (Dog: 0, Cat: 1, Chicken: 2)`,
        (x) => x    
    );

    console.log(`You ${isAlice ? 'played' : 'guessed'} ${FORTUNE[fortune]}`);

    return fortune;
}

//Declare outcome
interact.seeOutcome = (wager) => {
    console.log(`${who} saw the outcome: Bob Wins!`);
    console.log(`Bob accepted the payment of ${fU(wager)}`);
}

//Choose appropriate backend function and await it's completion
const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

//Check balance after game finish
const after = await getBalance();
console.log(`Your balance is now ${after}`);

//Done asking
ask.done();