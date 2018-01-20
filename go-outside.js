var raining = true;
var temperature = 20;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (temperature < 12) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature <15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you are ready to go outside!");
