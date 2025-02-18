// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "En el momento", time: 15 },
  { text: "El susurro de los pájaros", time: 18 },
  { text: "Solitario antes del sol lloró", time: 27 },
  { text: "Cayó del cielo", time: 32 },
  { text: "Como gotas de agua", time: 33 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 41 },
  { text: "Lindas mariposas en mis manos", time: 47 },
  { text: "Demasiada luz para el crepúsculo", time: 54 },
  { text: "Con ganas de amor por las flores", time: 59 },
  { text: "Esa visión", time: 67 },
  { text: "Realmente fuerte, me voló la cabeza", time: 72 },
  { text: "Silencio Déjame ver qué era", time: 78 },
  { text: "Solo quiero vivir en las nubes", time: 83 },
  { text: "¿Dónde estoy ahora? No sé por qué", time: 91 },
  { text: "Lindas mariposas en mis manos", time: 97 },
  { text: "Demasiada luz para el crepúsculo", time: 104 },
  { text: "Con ganas de amor por las flores", time: 108 },
  { text: "En el momento", time: 144 },
  { text: "El susurro de los pájaros", time: 148 },
  { text: "Solitario antes del sol lloró", time: 153 },
  { text: "Cayó del cielo", time: 158 },
  { text: "Como gotas de agua", time: 164 },
  { text: "¿Dónde estoy ahora? No sé por qué.", time: 169 },
  { text: "Lindas mariposas en mis manos", time: 176 },
  { text: "Demasiada luz para el crepúsculo", time: 183 },
  { text: "Con ganas de flores", time: 188 },
  { text: "Amor", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

document.addEventListener("click", function (e) {
  console.log("Click detectado en:", e.clientX, e.clientY); // Para depuración

  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  document.body.appendChild(sparkle);

  // Posiciona el brillo en el lugar del clic
  sparkle.style.left = `${e.clientX}px`;
  sparkle.style.top = `${e.clientY}px`;

  // Remueve el brillo después de la animación
  setTimeout(() => sparkle.remove(), 1000);
});
