// Dunno

var favoriteFood = 'pizza';
var numOfSlices = 8;

console.log(favoriteFood);
console.log(numOfSlices);


// Specifically Editable variables
let changeMe = true;

changeMe = false; 

console.log(changeMe);


// constant variables
const entree = 'Enchiladas';

console.log(entree);

// This line gets an error, intentionally entree = 'Tacos'; 

//Iterators

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp +=5
powerLevel -= 100
multiplyMe *= 11
quarterMe /= 4


// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//SEt 2

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++
lostDollar--

// Concatination

var favoriteAnimal = 'Tiger';

console.log('My favorite animal:  ' + favoriteAnimal);

//Interpolation

let myName = 'Chris';
let myCity = 'Philly';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// using typeof

let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable); // is a String

newVariable = 1;

console.log(typeof newVariable); //is a Number

//Final item

const Kelvin = 0; // creating a constant variable named Kelvin, assigning it a variable 
let Celsius = Kelvin - 273; // Celsisus is 273 degrees less than Kelvin. 

let Fahrenheit = Math.round(Celsius * (9/5) + 32);

console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);

let Newton = Math.floor(Celsius * (33/100));

console.log(`The temperature is ${Newton} degrees Newton.`);
