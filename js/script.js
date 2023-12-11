const reels = document.querySelectorAll('.reel');
const spinButton = document.getElementById('spinButton');
let coins = 100;
let winningSymbol = '🍒';

spinButton.addEventListener('click', () => {
  spinReels();
});

function spinReels() {
  reels.forEach((reel,index) => {
    const symbols = ['🍒', '🍊', '🍋', '🍇', '🍉' , '🥝']; 
    
  setTimeout(() => {
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      reel.textContent = randomSymbol;
    
      if (index === reels.length - 1) {
        const allSymbols = Array.from(reels).map((reel) => reel.textContent);
        console.log('All Symbols:', allSymbols);

        if (allSymbols.every((symbol) => symbol === winningSymbol)) {
          coins += 50;
          console.log('Coins:', coins);
          alert('¡Felicidades! Ganaste.');
          updateCoinsDisplay();
        }
      }
    }, 1000 * (index + 1));
  });
}

function updateCoinsDisplay() {
  const coinsDisplay = document.getElementById('coinsDisplay');
  coinsDisplay.textContent = coins;
}









