const startButton = document.getElementById("start-test");
const speedometer = document.querySelector(".needle");
const speedDisplay = document.querySelector(".speed");
const resultSection = document.querySelector(".result");
const resultText = document.getElementById("result-text");

const fakeSpeeds = [
  "5000 bananas por segundo!",
  "Mais rápida que a luz!",
  "A velocidade de uma tartaruga com jetpack!",
  "A conexão de internet mais rápida de Marte!",
  "1 Giga por segundo... de paciência.",
  "Seu PC está prestes a explodir de tanta velocidade!",
  "Você atingiu a velocidade da preguiça!",
];

startButton.addEventListener("click", () => {
  // Reset
  resultSection.classList.add("hidden");
  speedDisplay.textContent = "0 Mbps";
  speedometer.style.transform = "rotate(0deg)";

  // Simulate test
  let currentSpeed = 0;
  const testInterval = setInterval(() => {
    if (currentSpeed >= 100) {
      clearInterval(testInterval);
      showResult();
    } else {
      currentSpeed += Math.random() * 20;
      if (currentSpeed > 100) currentSpeed = 100;
      speedometer.style.transform = `rotate(${currentSpeed * 1.8}deg)`;
      speedDisplay.textContent = `${Math.floor(currentSpeed)} Mbps`;
    }
  }, 100);
});

function showResult() {
  setTimeout(() => {
    const randomResult =
      fakeSpeeds[Math.floor(Math.random() * fakeSpeeds.length)];
    resultText.textContent = `Sua velocidade de internet é... ${randomResult}`;
    resultSection.classList.remove("hidden");
  }, 1000);
}
