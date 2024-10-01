const city = 'New York City';

const logCitySkyline = () =>{
  let skyscraper = 'Empire State Building'
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline());

// Global Variables

let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () =>{
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());

//Block or local variables

const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
logVisibleLightWaves();

//More local vs global

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights'
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

// this exercise wasn't the greatest.

const getRandEvent = () => {

  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};


const getTrainingDays = event => {
  if (event === 'Marathon') {
    let days = 50;
    return 50;
  } else if (event === 'Triathlon') {
    let days = 100;
    return 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
    return 200;
  }
};

// The scope of `name` is too tight
const logEvent = event => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const train_days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime

const name = 'Nala';

logEvent(event);
logTime(train_days);
