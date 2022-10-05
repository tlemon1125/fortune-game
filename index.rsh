//Code It Assignment 6.1

'reach 0.1'

const [isFortune, Dog, Cat, Chicken] = makeEnum(3);
const [isDescision, TRUE, FALSE] = makeEnum(2);

const Player = {
    ...hasRandom,
    getFortune: Fun([], UInt),
    seeOutcome: Fun([], Null),
    informTimeout: Fun([], Null),
}

const makeDescision = (played, guessed) => {
    if(played == guessed){
        return TRUE;
    }
    else{
        return FALSE;
    }
}

assert(makeDescision(Dog, Dog) == TRUE);
assert(makeDescision(Dog, Cat) == FALSE);

forall(UInt, (x) => (
    assert(makeDescision(x, x) == TRUE)
));

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    });

    const Bob = Participant('Bob', {
        ...Player,
        acceptChallenge: Fun([UInt], Null),
    });

    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        });
    }

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });

    Alice.publish(wager, deadline).pay(wager);
    commit();

    Bob.only(() => {
        interact.acceptChallenge(wager);
    });

    Bob.pay(wager).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    //While loop if Alice decide Bob's guess is false
    var descision = FALSE;
    invariant(balance() == wager * 2 && isDescision(descision)); //Make sure the value of variable doesn't change
    while(descision == FALSE){
        commit();

        Alice.only(() => {
            const _aliceFortune = interact.getFortune();
            const [_commitAlice, _saltAlice] = makeCommitment(interact, _aliceFortune);
            const commitAlice = declassify(_commitAlice);
        });
    
        Alice.publish(commitAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();
    
        unknowable(Bob, Alice(_aliceFortune, _saltAlice));
    
        Bob.only(() => {
            const bobGuess = declassify(interact.getFortune());
        })
    
        Bob.publish(bobGuess).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));;
        commit();

        Alice.only(() => {
            const aliceFortune = declassify(_aliceFortune);
            const saltAlice = declassify(_saltAlice);
        });

        Alice.publish(aliceFortune, saltAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        checkCommitment(commitAlice, saltAlice, aliceFortune);

        descision = makeDescision(aliceFortune, bobGuess);
        continue;
    }

    assert(descision == TRUE && isDescision(descision));

    transfer(wager * 2).to(Bob);
    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome();
    });
});