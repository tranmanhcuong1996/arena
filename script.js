// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let turn = GAME_SETTING.turn;

document.querySelector("#user-champion .character-name").textContent =
  REONA.name;
console.log(FEIXIAO);
document.querySelector("#opponent-champion .character-name").textContent =
  FEIXIAO.name;

function attack() {
  if (turn === "user") {
    document.querySelector("#user-champion").classList.add("img-monotone");
    document
      .querySelector("#opponent-champion")
      .classList.remove("img-monotone");

    turn = "opponent";
  } else {
    document.querySelector("#user-champion").classList.remove("img-monotone");
    document.querySelector("#opponent-champion").classList.add("img-monotone");

    turn = "user";
  }
}
