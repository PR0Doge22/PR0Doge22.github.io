// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

let characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let places = ["the soup kitchen", "Disneyland", "the White House"]

let events = ["spontaneously combusted", "melted into a puddle", "turned into a slug and slithered away"]

// 
// 
// 

// Partial return random string function

function returnRandomStoryString() {
  // 
  
  let randomCharacter = randomValueFromArray(characters)
  let randomPlace = randomValueFromArray(places)
  let randomEvent = randomValueFromArray(events)

  // 94 Fahrenheit, randomcharacter, !randomplace, randomevent, !300 pounds
  let storyText = `300 pounds of set, hard candy blocked the main entrance to ${randomPlace}. Bob went through the side entrance to see the temperature set to 94 Fahrenheit and proceeded to yell, "It needes to be at least triple that, halfwit!" to ${randomCharacter}. ${randomCharacter} slumped down with shame and ${randomEvent}.` //`It was 94 Fahrenheit outside, so ${randomCharacter} went for a walk. When they got to ${randomPlace}, they stared in horror for a few moments, then ${randomEvent}. Bob saw the whole thing, but was not surprised — ${randomCharacter} weighs 300 pounds, and it was a hot day.`

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString()

  if (customName.value !== "") {
    const name = customName.value;

    newStory = newStory.replace("Bob", name)
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714) + " stone";
    const temperature = Math.round((94-32) * 5/9) + " Celsius";

    newStory = newStory.replace("300 pounds", weight)
    newStory = newStory.replace("94 Fahrenheit", temperature)
  }

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}