const divChars = document.querySelector(".chars");
const imageGif = document.querySelector(".gifs");
const iconListChar = divChars.querySelector(".row"); //
const iconChar = iconListChar.querySelectorAll(".imgChar"); //lista dos personagem na tela

let stats = "none";
imageGif.innerHTML = `<p class='nameChar' >Select your Fighter</p>`;

function getChar() {
  iconListChar.addEventListener("click", selectChar);
}

function selectChar(char) {
  const charSelect = char.target.id;
  const nameChar = char.target.alt || "Select your Fighter";

  if (stats === "none") {
    stats = "block";
    imageGif.style.display = stats;
    imageGif.innerHTML = `<img class='gif' src="./assets/gifs/${charSelect}.gif" alt="">
    <h3>${nameChar}<h3>`;
  }
  if (stats === "block") {
    imageGif.innerHTML = `<img class='gif' src="./assets/gifs/${charSelect}.gif" alt="">
    <p class='nameChar' class='gif' >${nameChar}<p>`;
  }

  //resolver pendencia de clicar em qualquer lugar desabilita a imagem
  if (charSelect.classList.contains("gif")) {
    stats === "none";
    imageGif.style.display = stats;
  }
}

function selectGifId() {}

getChar();
