import './style.css';
import Player from "./class/Player.ts";
import PadController from "./class/PadController.ts";

import Game from "./class/Game.ts";

const player1 = new Player();
const padcontroller : PadController = new PadController();
player1.setupController(padcontroller);


new Game("gameArea", player1);
