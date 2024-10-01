function getReminder(){
    console.log('Water the plants.')
}

function greetInSpanish(){
    console.log('Buenas tardes.')
}

// delcare and call a function
function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
}
sayThanks();

// Adding Parameters

function sayThanks(name) {
    console.log(`Thank you for your purchase ${name}! We appreciate your business.`);
}

sayThanks("Bob");

// setting default values for a function

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

// more use of functions and parameters

function monitorCount(rows, columns){
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// Nested functions

function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns)*200;
}

const totalCost = costOfMonitors(5,4)

console.log(totalCost);

//Anonymous Functions

const plantNeedsWater = function (day){
    if (day === "Wednesday"){
        return true;
    }
    else {
        return false;
    }
}

console.log(plantNeedsWater('Tuesday'));

// using fat arrows

const plantNeedsWater = (day) =>{
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

// Paper Rock and Scissors Game

const getUserChoice  = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput !== "scissors" && userInput === "rock" && userInput === "paper") {
        console.log("you done messed up.... try again")
    }
    else{

        return userInput;
    }

}

const getComputerChoice =() =>{
    let randVal = Math.floor(Math.random() * 3);

    let compChoice = ''

    switch (randVal) {
        case 0: compChoice = "rock";
            return  compChoice;

        case 1: compChoice = "paper";
            return  compChoice;

        case 2: compChoice = "scissors";
            return  compChoice;

        default: console.log("Comp messed up....")
            break;
    }

}

const determineWinner = (userChoice, computerChoice) => {

    console.log(`Human Choice: ${userChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);


    if (userChoice === computerChoice) {
        return "tie";
    } else if (userChoice === 'rock') {
        switch (true) {
            case (userChoice === 'rock' && computerChoice === 'paper'):
                return "Computer Wins!"

            case (userChoice === 'rock' && computerChoice === 'scissors'):
                return "Human Wins!"

        }
    } else if (userChoice === 'paper') {
        switch (true) {
            case (userChoice === 'paper' && computerChoice === 'scissors'):
                return "Computer Wins!"

            case (userChoice === 'paper' && computerChoice === 'rock'):
                return "Human Wins!"
        }
    } else if (userChoice === 'scissors') {
        switch (true) {
            case (userChoice === 'scissors' && computerChoice === 'rock'):
                return "Computer Wins!"

            case (userChoice === 'scissors' && computerChoice === 'scissors'):
                return "Human Wins!"
        }
    }
    else {
        console.log("Danger Danger Will Robinson, we shouldn't be here!!\n" +
            "Human: " + userChoice + "\n" +
            "Computer: " + computerChoice);

    }

}

console.log(determineWinner(getUserChoice('Rock'),getComputerChoice()));

// Sleep calculator

const getSleepHours = (day) => {
    day = day.toLowerCase()
    switch (day){
        case "monday":
            return 7.5
        case "tuesday":
            return 7.5
        case "wednesday":
            return 7.5
        case "thursday":
            return 7.5
        case "friday":
            return 7.5
        case "saturday":
            return 7.5
        case "sunday":
            return 7.5
        default:
            console.log("Shouldn't be here tisk tisk");
            break;
    }


}

const getActualSleepHours = () =>{
    return  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') +
        getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

const getIdealSleepHours = () =>{

    return 7.5 * 7;

}

console.log("Actual Sleep Hours: " + getActualSleepHours());
console.log("Ideal Sleep Hours: " + getIdealSleepHours());

const calcualteSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    switch (true) {
        case (actualSleepHours === idealSleepHours):
            console.log("You got the right amount of Sleep, lucky you");
            break;
        case (actualSleepHours > idealSleepHours):
            console.log("Lazy ass....");
            break;
        case (actualSleepHours < idealSleepHours):
            console.log(`Go to bed, you work too hard. You\'re ${idealSleepHours - actualSleepHours} over your ideal hours of sleep.`);
            break;
    }

}

calcualteSleepDebt();