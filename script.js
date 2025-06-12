// Função para calcular anos, dias, horas, minutos e segundos desde 07/10/2021
function calcularTempo() {
  const inicio = new Date(2021, 9, 7, 0, 0, 0); // mês começa do zero (9 = outubro)
  const agora = new Date();
  let diff = (agora - inicio) / 1000; // segundos

  const anos = Math.floor(diff / (365.25 * 24 * 3600));
  diff -= anos * 365.25 * 24 * 3600;

  const dias = Math.floor(diff / (24 * 3600));
  diff -= dias * 24 * 3600;

  const horas = Math.floor(diff / 3600);
  diff -= horas * 3600;

  const minutos = Math.floor(diff / 60);
  const segundos = Math.floor(diff - minutos * 60);

  return { anos, dias, horas, minutos, segundos };
}
function formatarTempo({ anos, dias, horas, minutos, segundos }) {
  let partes = [];
  if (anos > 0) partes.push(`${anos} ${anos === 1 ? "ano" : "anos"}`);
  if (dias > 0) partes.push(`${dias} ${dias === 1 ? "dia" : "dias"}`);
  if (horas >= 0) partes.push(`${horas} ${horas === 1 ? "hora" : "horas"}`);
  if (minutos >= 0)
    partes.push(`${minutos} ${minutos === 1 ? "minuto" : "minutos"}`);
  if (segundos >= 0)
    partes.push(`${segundos} ${segundos === 1 ? "segundo" : "segundos"}`);
  return partes.join(", ");
}

let intervaloContador = null;
const tempoEl = document.getElementById("tempo");
const contadorEl = document.getElementById("contador");

function mostrarTempo() {
  tempoEl.textContent = formatarTempo(calcularTempo());
}

// Mostrar todo o conteúdo ao clicar no botão
const botaoMostrar = document.getElementById("mostrar-tudo");
const conteudo = document.getElementById("conteudo");
const containerBotao = document.getElementById("container-botao");

botaoMostrar.addEventListener("click", () => {
  containerBotao.style.display = "none";
  conteudo.style.display = "";
  mostrarTempo();
  intervaloContador = setInterval(mostrarTempo, 1000);
});

// Emojis de coração animados
function criaCoracao() {
  const coracoes = document.querySelector(".coracoes");
  const coracao = document.createElement("div");
  coracao.innerText = "💙";
  coracao.className = "coracao";
  coracao.style.position = "fixed";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.top = "-40px";
  coracao.style.fontSize = 20 + Math.random() * 30 + "px";
  coracao.style.opacity = Math.random() * 0.7 + 0.3;
  coracao.style.transition = `transform 4.5s linear, opacity 4.5s linear`;
  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.style.transform = `translateY(${window.innerHeight + 60}px)`;
    coracao.style.opacity = "0";
  }, 10);
  setTimeout(() => coracao.remove(), 4700);
}
// Gera corações a cada 400ms
setInterval(criaCoracao, 400);
