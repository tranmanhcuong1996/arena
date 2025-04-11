// Remember, we're gonna use strict mode in all scripts now!
"use strict";

document.querySelector("#user-champion .character-name").textContent =
  REONA.name;
document.querySelector("#opponent-champion .character-name").textContent =
  FEIXIAO.name;

function attack() {
  if (GAME_SETTING.turn === "user") {
    document.querySelector("#user-champion").classList.add("img-monotone");
    document
      .querySelector("#opponent-champion")
      .classList.remove("img-monotone");

    document.querySelector(".turn-message.danger").classList.remove("d-none");
    document.querySelector(".turn-message.danger p").classList.add("fade-text");

    document.querySelector(".turn-message.green").classList.add("d-none");
    document
      .querySelector(".turn-message.green p")
      .classList.remove("fade-text");

    GAME_SETTING.turn = "opponent";
  } else {
    document.querySelector("#user-champion").classList.remove("img-monotone");
    document.querySelector("#opponent-champion").classList.add("img-monotone");

    document.querySelector(".turn-message.green").classList.remove("d-none");
    document.querySelector(".turn-message.green p").classList.add("fade-text");

    document.querySelector(".turn-message.danger").classList.add("d-none");
    document
      .querySelector(".turn-message.danger p")
      .classList.remove("fade-text");

    GAME_SETTING.turn = "user";
  }
}
