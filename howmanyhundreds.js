function howManyHundreds(num) {
  return "How many times does 100 go into " + num + "? " + Math.floor(num / 100) + " times."
}

console.log(howManyHundreds(123456));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));
