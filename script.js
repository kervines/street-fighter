const divChars = document.querySelector(".chars");
const imageGif = document.querySelector(".gifs");
const iconListChar = divChars.querySelector(".row"); //
const iconChar = iconListChar.querySelectorAll(".imgChar"); //lista dos personagem na tela

let stats = "none";

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
  } else if (stats === "block") {
    imageGif.innerHTML = `<img class='gif' src="./assets/gifs/${charSelect}.gif" alt="">
    <p class='nameChar' class='gif' >${nameChar}<p>`;
  } else if (charSelect === "") {
    stats === "none";
    imageGif.style.display = stats;
  }
}

function selectGifId() {}

getChar();
