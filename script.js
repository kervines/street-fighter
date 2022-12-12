const divChars = document.querySelector(".chars");
const imageGif = document.querySelector(".gifs");
const iconChar = document.querySelector(".row");

const iconList = iconChar.getElementsByClassName("imgChar"); //lista dos personagem na tela
const characterList = [...Array(16).keys()]; //lista numerada de 0 - 15

document.querySelector(".gifs").style.display = "none";
let stat = "none";
let index = 0;

function charSelect() {
  if (stat === "none") {
    stat = "block";
    document.querySelector(".gifs").style.display = stat;
    imageGif.innerHTML = `<img class="${characterList[index]}" src="./assets/gifs/${characterList[index]}.gif" alt="" 
    class="gif">`;
  } else if (stat === "block") {
    stat = "none";
    document.querySelector(".gifs").style.display = stat;
  }
}

function setIndex() {}

divChars.addEventListener("click", charSelect);
