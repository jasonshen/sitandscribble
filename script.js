// An array of possible texts for the underlined parts
var prompts = [
  ["Details from last summer", "A dream you had last night", "A conversation you overheard"],
  ['Start with: "I remember" ', 'Start with: "I wonder" ', 'Start with: "I wish" ']
];

// A function that returns a random element from an array
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// A function that replaces the text of an element with a random text from the corresponding array
function replaceText(id, index) {
  var element = document.getElementById(id);
  var newText = randomElement(prompts[index]);
  element.textContent = newText;
}

var period1, period2;
var totalTime = 50;

// A function that runs when the page loads and replaces all the texts and times
function init() {
    // Choose a random total time from the options
    splitTime(totalTime/2);

 // A function that splits a total time into two periods that are multiples of 5
function splitTime(total) {
    // Calculate the maximum possible value for the first period
    var max = Math.floor(total / 2 / 5) * 5;

    // Calculate a random value for the first period that is a multiple of 5
    period1 = randomNumber(1, max / 5) * 5;

// A function that returns a random number between min and max (inclusive)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
    // Calculate the value for the second period so that period1 + period2 equals total
    period2 = total - period1;
}
  
    // Replace the texts with random texts
    replaceText("prompt1", 0);
    replaceText("prompt2", 1);

  
    document.getElementById("time1").textContent = period1; // Replace the first time and get its value
    document.getElementById("time2").textContent = period1; // Make time2 the same as time1
  
document.getElementById("time3").textContent = period2;
  // Replace the third time and get its value
    document.getElementById("time4").textContent = period2; // Make sure time3 is same as time4
}