let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("submitGuess").addEventListener("click", () => {
  const guess = parseInt(document.getElementById("guess").value);
  const hint = document.getElementById("hint");
  const attemptsDisplay = document.getElementById("attempts");
  const celebration = document.getElementById("celebration");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    hint.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === randomNumber) {
    hint.textContent = "You guessed it right!";
    celebration.classList.remove("hidden");
    celebration.textContent = `🎉 Congratulations! You found the number in ${attempts} attempts! 🎉`;
    document.body.style.backgroundColor = "#d4edda";
  } else if (guess < randomNumber) {
    hint.textContent = "Try a higher number.";
  } else {
    hint.textContent = "Try a lower number.";
  }
});

// Register the service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker registered'))
    .catch(error => console.error('Service Worker registration failed:', error));
}
