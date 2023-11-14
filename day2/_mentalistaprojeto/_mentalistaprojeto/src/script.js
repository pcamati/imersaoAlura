var randomNumber = Math.floor(Math.random()*1000)+1;
console.log(randomNumber);

while (guess != randomNumber) {
  var guess = prompt("Guess a number between 1 and 1000")
  
  if (guess == null) {
    break
  }

  if (guess == randomNumber) {
    alert("You guessed correctly! The number was "+randomNumber+".")
  } else if (guess > randomNumber) {
    alert("Your guess is bigger than the correct number. Please guess again!")
  } else if (guess < randomNumber) {
    alert("Your guess is smaller than the correct number. Please guess again!")
  }
}

