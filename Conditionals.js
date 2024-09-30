
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
console.log('Time to wait for a sale.')

};


let hungerLevel = 7;

if (hungerLevel > 7){

  console.log('Time to eat!')

} else{

  console.log('We can eat later!')
};

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
  }
else{
  console.log('not bed time yet')
  };
  
 // NFI about truthy vs falsy
 
 
 let tool = '';
tool = 'marker';

// Use short circuit evaluation to assign writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


//Tirney operators

let isLocked = false;
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') :console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//if then, and multiple else statements

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if (season==='winter'){
  console.log('It\'s winter! Everything is covered in snow.')
}
else if (season==='fall'){
  console.log('It\'s fall! Leaves are falling!')
}
else if (season==='summer'){
  console.log('It\'s sunny and warm because it\'s summer!')
}
else {
  console.log('Invalid season.');
}

// switch statement 

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {

  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

//Magic 8-ball 

let userName = 'Bob';

let userQuestion = 'stuff'

let randomNumber = Math.floor(Math.random() * 8);

let eightBall  = '';


switch (randomNumber) {
  case 0:
    eightBall = 'It is certain'
    break; 
  case 1:
    eightBall = 'It is decidedly so'
    break; 
  case 2:
    eightBall = 'Reply hazy try again'
    break; 
  case 3:
    eightBall = 'Cannot predict now'
    break; 
  case 4:
    eightBall = 'Do not count on it'
    break; 
  case 5:
    eightBall = 'My sources say no'
    break; 
  case 6:
    eightBall = 'Outlook not so good'
    break; 
  case 7:
    eightBall = 'Signs point to yes'
    break;   
  default:
    eightBall = 'oops!'
    break; 
}

userName ? console.log(`Hello ${userName}, the answer to your question ${userQuestion} is ${eightBall}!`) : console.log('Hello!');


// Race Numbers

let raceNumber = Math.floor(Math.random() * 1000);

let registered_early = true;

let runner_age = 25;

runner_age > 18 && registered_early === true ? raceNumber += 1000 : raceNumber

if (runner_age > 18 && registered_early === true ){

    console.log(`Your race time is: 9:30 AM and your bib number is ${raceNumber}.`)
} 

else if (runner_age > 18 && registered_early === false) {
    console.log(`Your race time is: 11:00 AM and your bib number is ${raceNumber}.`)
}
else if (runner_age < 18 ){
    console.log(`Your race time is: 12:30 AM and your bib number is ${raceNumber}.`)
}
else if (runner_age = 18){
    console.log('Please see registration desk')
}