let randomNumber = Math.floor(Math.random() * 100) + 1;
const message = document.getElementById('message');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

submitButton.addEventListener('click', () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = '🎉 Congratulations! You guessed it right!';
    message.style.color = 'green';
  } else if (userGuess < randomNumber) {
    message.textContent = '📉 Too low! Try again.';
    message.style.color = 'red';
  } else {
    message.textContent = '📈 Too high! Try again.';
    message.style.color = 'red';
  }
});

resetButton.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  message.textContent = '';
  guessInput.value = '';
  message.style.color = '#555';
});