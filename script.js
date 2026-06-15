const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

function rollDice() {
  const count = parseInt(document.getElementById("diceCount").value);
  const container = document.getElementById("diceContainer");
  const totalDisplay = document.getElementById("total");

  container.innerHTML = "";
  totalDisplay.innerText = "";

  let total = 0;

  // animation interval
  const interval = setInterval(() => {
    container.innerHTML = "";
    total = 0;

    for (let i = 0; i < count; i++) {
      const roll = Math.floor(Math.random() * 6);
      container.innerHTML += diceFaces[roll] + " ";
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    container.innerHTML = "";
    total = 0;

    for (let i = 0; i < count; i++) {
      const roll = Math.floor(Math.random() * 6);
      container.innerHTML += diceFaces[roll] + " ";
      total += roll + 1;
    }

    totalDisplay.innerText = "Total: " + total;
  }, 1000);
}