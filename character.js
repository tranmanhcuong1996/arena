// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const REONA = {
  name: "Reona",
  stats: {
    hit_point: 1000,
    attack: 100,
    defend: 50,
  },
};

const FEIXIAO = {
  name: "Fei Xiao",
  stats: {
    hit_point: 800,
    attack: 150,
    defend: 20,
  },
};

const GAME_SETTING = new Proxy(
  {
    turn: "user",
  },
  {
    set(target, key, value) {
      target[key] = value;
      return true;
    },
  }
);
