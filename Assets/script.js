const botaoIniciar = document.getElementById("start-test");
const velocimetro = document.querySelector(".needle");
const displayVelocidade = document.querySelector(".speed");
const secaoResultado = document.querySelector(".result");
const textoResultado = document.getElementById("result-text");
const body = document.body;
const container = document.querySelector(".container");
const titulo = document.querySelector(".title");
const jumpscareImage = document.getElementById("jumpscareImage");
const pardalImage = document.getElementById("pardalImage");

const velocidadesFalsas = [
  "5000 bananas por segundo!",
  "Mais rápida que a luz!",
  "A velocidade de uma tartaruga com jetpack!",
  "A conexão de internet mais rápida de Marte!",
  "1 Giga por segundo... de paciência.",
  "Seu PC está prestes a explodir de tanta velocidade!",
  "Você atingiu a velocidade da preguiça!",
  "Está usando Internet Explorer? Porque está lento demais!",
  "happy halloween!",
  "Passe com sua internet aqui para medirmos sua velocidade!",
  "Sua internet está obstruindo a via"
];

botaoIniciar.addEventListener("click", () => {
  secaoResultado.classList.add("hidden");
  displayVelocidade.textContent = "0 Mbps";
  velocimetro.style.transform = "rotate(0deg)";

  let velocidadeAtual = 0;
  const intervaloTeste = setInterval(() => {
    if (velocidadeAtual >= 100) {
      clearInterval(intervaloTeste);
      mostrarResultado();
    } else {
      velocidadeAtual += Math.random() * 20;
      if (velocidadeAtual > 100) velocidadeAtual = 100;
      velocimetro.style.transform = `rotate(${velocidadeAtual * 1.8}deg)`;
      displayVelocidade.textContent = `${Math.floor(velocidadeAtual)} Mbps`;
    }
  }, 100);
});

function mostrarResultado() {
  setTimeout(() => {
    const resultadoAleatorio = velocidadesFalsas[Math.floor(Math.random() * velocidadesFalsas.length)];
    textoResultado.textContent = `Sua velocidade: ${resultadoAleatorio}`;
    secaoResultado.classList.remove("hidden");

    if (resultadoAleatorio.toLowerCase() === "happy halloween!") {
      aplicarEfeitosBugados();
    } else if (resultadoAleatorio.includes("Internet Explorer")) {
      exibirJumpscare();
    } else if (resultadoAleatorio.includes("Passe com sua internet aqui para medirmos sua velocidade!")) {
      exibirPardal();
    } else {
      removerEfeitosBugados();
    }
  }, 1000);
}

function aplicarEfeitosBugados() {
  body.classList.add("bugged-body");
  container.classList.add("bugged-container");
  titulo.classList.add("bugged-title");
  displayVelocidade.classList.add("bugged-speed");
}

function removerEfeitosBugados() {
  body.classList.remove("bugged-body");
  container.classList.remove("bugged-container");
  titulo.classList.remove("bugged-title");
  displayVelocidade.classList.remove("bugged-speed");
  body.style.backgroundColor = "#f0f0f0";
}

function exibirJumpscare() {
  jumpscareImage.style.visibility = "visible";
  jumpscareImage.style.opacity = "1";

  setTimeout(() => {
    jumpscareImage.style.opacity = "0";
    setTimeout(() => {
      jumpscareImage.style.visibility = "hidden";
    }, 1000);
  }, 2000);
}

function exibirPardal() {
  pardalImage.style.visibility = "visible";
  pardalImage.style.opacity = "1";

  setTimeout(() => {
    pardalImage.style.opacity = "0";
    setTimeout(() => {
      pardalImage.style.visibility = "hidden";
    }, 1000);
  }, 2000);
}
