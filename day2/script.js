var randomNumber = Math.floor(Math.random()*1000)+1;
var maxAttempts = 15;
var pressedButton = 0;
var listGuesses = []

document.getElementById('startingText').innerHTML = 'Please guess a number between 1 and 1000. You have a total of '+maxAttempts+' attemps.'

function pressed() {
  pressedButton++
  var guess =  document.getElementById('guess').value
  listGuesses.push(guess)
  var conditionText = document.getElementById('condition')
  
  if (pressedButton == maxAttempts) {
    conditionText.innerHTML = 'You exhausted your number of attemps. Please start again. The correct answer was '+randomNumber
  } else {
      if (guess == randomNumber) {
        conditionText.innerHTML = 'You guessed correctly and you won in '+pressedButton+' attempts!!!'
      } else if (guess > randomNumber) {
        conditionText.innerHTML = 'Your guess is bigger than the correct number. Please guess again!'
      } else if (guess < randomNumber) {
        conditionText.innerHTML = 'Your guess is smaller than the correct number. Please guess again!'
      }
    }
  }
  

  
  
  // document.write(listGuesses[listGuesses.length - 1])  
 


// while (guess != randomNumber) {
//   var guess = pressed()
//   // var guess = prompt("Guess a number between 1 and 1000")
  
//   if (guess == null) {
//     break
//   }

//   if (guess == randomNumber) {
//     alert("You guessed correctly! The number was "+randomNumber+".")
//   } else if (guess > randomNumber) {
//     alert("Your guess is bigger than the correct number. Please guess again!")
//   } else if (guess < randomNumber) {
//     alert("Your guess is smaller than the correct number. Please guess again!")
//   }
// }